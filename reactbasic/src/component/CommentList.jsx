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
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList)
    console.log(index)
  }

  const addComment = () => {
    // const add = {name: "히히ㅇㅎㅇㄶ히", comment : "아아아아아?~!!!"}
    // setCommentList([add,...commentList])

    const add = {name : name, comment: content}
    setCommentList([add,...commentList])
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
      이름 : <input value={name} onChange={(e) => setName(e.target.value)}/>
      댓글 : <input value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={addComment}>글추가</button>
    </div>
  )
}

export default CommentList;