import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import BookingForm from "../components/booking/BookingForm";
import CommentForm from "../components/comment/CommentForm";
import CommentsListing from "../components/comment/CommentsListing";

const PostLayout = ({children, post, setCommentRating}) => {
    const [comments, setComments] = useState(null)
    useEffect(() => {
        setComments([...post.comments])
    }, [])
    return ( 
        <section className="post-layout">
            <div className="left-side">
                <Button className="back-button" variant="contained" href="/">Retour</Button>
                {children}
                <CommentForm postId={post._id} setComments={setComments} setCommentRating={setCommentRating}/>
                <CommentsListing comments={comments}/>
            </div>
            <div className="right-side">
                <BookingForm postId={post._id}/>
            </div>
        </section>
     );
}
 
export default PostLayout;