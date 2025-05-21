from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime


def get_posts(db: Session):
    return db.query(models.Post).order_by(models.Post.created_at.desc()).all()


def create_post(db: Session, post: schemas.PostCreate):
    db_post = models.Post(**post.dict())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post


def delete_post(db: Session, post_id: int, password: str):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if post and post.password == password:
        db.delete(post)
        db.commit()
        return True
    return False


def update_post(db: Session, post_id: int, post_update: schemas.PostUpdate):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if post and post.password == post_update.password:
        post.title = post_update.title
        post.content = post_update.content
        post.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(post)
        return post
    return None