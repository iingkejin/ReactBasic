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

  // const addComment = () => {
  //   // const add = {name: "히히ㅇㅎㅇㄶ히", comment : "아아아아아?~!!!"}
  //   // setCommentList([add,...commentList])

  //   const add = {name : name, comment: content}
  //   setCommentList([add,...commentList])
  //   // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
  //   setName('')
  //   setContent('')
  // }

  const addComment = () => {
    // name, content value값이 없을 때
    name === '' || content === '' ? alert('이름과 댓글을 입력하세요') : (
      // iife 
      (()=>{
        const add = {name : name, comment: content}
        setCommentList([add,...commentList])
        setName('')
        setContent('')
      })()
    )
  };

  return (
    <div>
      {
        commentList.map((comment, i)=> {
          return (
            <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=> deleteComment(i)}/>
          )
        })
      }
      {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생 
          그 때 발생한 이벤트를 매개변수 e
      */}
      이름 : <input value={name} onChange={(e) => setName(e.target.value)}/>
      댓글 : <input value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={addComment}>글추가</button>
    </div>
  )
}

export default CommentList;