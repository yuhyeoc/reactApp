# backend/app/main.py
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.database import SessionLocal, engine
from app import models, schemas, crud

# 테이블 생성 (앱 시작 시 1회 실행)
models.Base.metadata.create_all(bind=engine)

# FastAPI 인스턴스 생성
app = FastAPI()

# CORS 설정 (프론트에서 API 호출 가능하도록 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 배포 시에는 도메인 제한 권장
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB 세션 의존성
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 게시글 목록 조회
@app.get("/posts", response_model=list[schemas.PostOut])
def read_posts(db: Session = Depends(get_db)):
    return crud.get_posts(db)

# 게시글 작성
@app.post("/posts", response_model=schemas.PostOut)
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db)):
    return crud.create_post(db, post)

# 게시글 삭제 (비밀번호 확인)
@app.delete("/posts/{post_id}")
def delete_post(post_id: int, payload: schemas.PostDelete, db: Session = Depends(get_db)):
    if not crud.delete_post(db, post_id, payload.password):
        raise HTTPException(status_code=403, detail="Invalid password")
    return {"detail": "Deleted successfully"}

# 게시글 수정 (비밀번호 확인)
@app.put("/posts/{post_id}", response_model=schemas.PostOut)
def update_post(post_id: int, post: schemas.PostUpdate, db: Session = Depends(get_db)):
    updated = crud.update_post(db, post_id, post)
    if not updated:
        raise HTTPException(status_code=403, detail="Invalid password")
    return updated
