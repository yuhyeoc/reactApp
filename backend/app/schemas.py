from pydantic import BaseModel
from datetime import datetime

class PostBase(BaseModel):
    title: str
    content: str
    password: str
    author_name: str

class PostCreate(PostBase):
    pass

class PostUpdate(BaseModel):
    title: str
    content: str
    password: str

class PostDelete(BaseModel):
    password: str

class PostOut(PostBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True