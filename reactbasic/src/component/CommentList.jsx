import React from 'react';
import Comment from './Comment';
import {useState} from 'react';

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
  const [commentList, setCommentList] = useState(comments);

  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList)
    console.log(index)
  }

  return (
    <div>
      {
        commentList.map((comment, i)=> {
          return (
            <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=> deleteComment(i)}/>
          )
        })
      }
    </div>
  )
}

export default CommentList;