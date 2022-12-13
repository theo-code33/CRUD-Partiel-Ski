import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

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
        <div>
            <div className="img-container">
                <img src={post.imgUrl ? post.imgUrl : '/skiing-with-a-view-over-the-mountains.jpg'} alt={`Image du post ${post.title}`} />
            </div>
            <div className="content-post">
                <Rating name="read-only" value={ratingPost} readOnly />
            </div>
        </div>
     );
}
 
export default PostInformations;