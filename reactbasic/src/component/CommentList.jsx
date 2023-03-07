import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name : "이예진1",
    comment : "안녕하세요. 이예진 입니다."
  },
  {
    name : "이예진2",
    comment : "리액트 재밌다~!"
  }, 
  {
    name : "이예진3",
    comment : "리액트 재미없어!!"
  }
]

function CommentList() {
  return (
    <div>
      {
        comments.map((comment, i)=>{
          return (
            <Comment name={comment.name} comment={comment.comment} key={i}/>
          )
        })
      }
    </div>
  )
}

export default CommentList;