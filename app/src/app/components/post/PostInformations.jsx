import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import PostMainContent from "./PostMainContent";

const PostInformations = ({post}) => {

    const [ratingPost, setRatingPost] = useState(0)

    const calculateRating = () => {
        let ratingTotal = 0
        let numberRating = 0
        post.comments?.forEach((comment) => {
            ratingTotal += comment.stars
            numberRating += 1
        })
        const rating = ratingTotal / numberRating
        return rating
    }
    useEffect(() => {
        const rating = calculateRating()
        setRatingPost(rating)
    },[])

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