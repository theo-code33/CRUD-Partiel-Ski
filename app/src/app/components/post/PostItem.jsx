import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostMainContent from "./PostMainContent";


const PostItem = ({post}) => {
    return ( 
        <div className="container-post-item">
            <Link to={`/post/${post._id}`}>
                <div className="image-container">
                    <img src={post.imgUrl ? post.imgUrl : '/skiing-with-a-view-over-the-mountains.jpg'} alt={`Image du post ${post.title}`} />
                </div>
                <PostMainContent post={post}/>
            </Link>
        </div>
     );
}
 
export default PostItem;