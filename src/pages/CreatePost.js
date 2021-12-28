import {useState} from "react";
import {
addDoc,
collection

} from 'firebase/firestore';
import { db, auth } from "../firebase/config";
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [postContent, setPostContent] = useState('')

    const postCollectionRef = collection(db, 'posts ')

    let navigate = useNavigate()

    const createPost = async ()=>{
        const post = await addDoc(postCollectionRef, {title, postContent, author:{name: auth.currentUser.displayName , id: auth.currentUser.uid}})
        navigate('/')
         //Name & id del Author => Lo sacas de la const Auth => cuando vos te logueas la variable auth es populada con los datos del usuario

    }



  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
           onChange={e => setTitle(e.target.value)}
           type="text"
            placeholder="Title..." />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea 
          onChange={e=> setPostContent(e.target.value)}
          placeholder="Post..." />
        </div>
        <button onClick={createPost} >Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
