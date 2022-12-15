import { Rating } from "@mui/material";
import PostMainContent from "./PostMainContent";

const PostInformations = ({post, ratingPost}) => {

    return ( 
        <div className="container-content-post">
            <div className="img-container">
                <img src={post.imgUrl ? post.imgUrl : '/skiing-with-a-view-over-the-mountains.jpg'} alt={`Image du post ${post.title}`} />
            </div>
            <div className="post-content">
                <Rating name="rating" value={ratingPost} readOnly />
                <PostMainContent post={post}/>
                <p>{post.description}</p>
            </div>
        </div>
     );
}
 
export default PostInformations;