import React from 'react'
import Styles from "./posts.module.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Posts = () => {
  const { isAuthenticated } = useParams();
  var auth = false;
  if(isAuthenticated === "shlok")
      auth = true;
  return (
    <div className={Styles.posts}>
        <div className={Styles.postheader}>
            <ul>
                <li>All Posts</li>
                <li>Article</li>
                <li>Events</li>
                <li>Education</li>
                <li>Jobs</li>
            </ul>
        </div>
        <div className={Styles.btns}>
            <div className={Styles.firstBtn}>
                <button>White a Post</button>
                <img src="/images/drop_down.jpg" alt="drop_down" />
            </div>
            { auth ?  
            <span></span> :
            <div className={Styles.secondBtn}>
                <button><Link className={Styles.Link} to="/join">Join Group</Link></button>
            </div> 
            }
        </div>
    </div>
  )
}

export default Posts;