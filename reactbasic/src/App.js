/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Comment from './component/Comment';
import CommentList from './component/CommentList'
import back from './toy.jpg'

function App() {
  return (
    <div className='App'>
      <CommentList/>
      {/* <div className='back'></div> */}
      {/* <div style={{backgroundImage : 'url(' + back + ')', height : '400px'}}></div> */}
      {/* <div style={{backgroundImage :` url(${back})`, height : '400px'}}></div> */}
      {/* <img src={process.env.PUBLIC_URL + 'toy2.jpg'} /> */}

      {/* <div style={{backgroundImage : 'url(https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg)', height : '300px'}}></div> */}
      {/* <img src="https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg" alt="" /> */}
      {/* <img src={back} alt="" />
      <div style={{backgroundImage : 'url('+ +')'}}></div> */}
    </div>
  );
}
export default App;