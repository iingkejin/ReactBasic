import React from 'react';
// import './Comment.css';

const styles = {
  
}

function Comment(props) {
  return (
    <div className='wrapper'>
      <div className='img-box'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user-img" />
      </div>

      <div className='content-container'>
        <span className='name-text'>{props.name}</span>
        <span className='comment-text'>{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment;