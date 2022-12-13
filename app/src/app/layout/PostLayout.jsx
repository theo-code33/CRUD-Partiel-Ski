import { Button } from "@mui/material";
import BookingForm from "../components/booking/BookingForm";
import CommentForm from "../components/comment/CommentForm";
import CommentsListing from "../components/comment/CommentsListing";

const PostLayout = ({children, post}) => {
    return ( 
        <section className="post-layout">
            <Button variant="contained" href="/">Retour</Button>
            <div className="left-side">
                {children}
                <CommentForm postId={post._id}/>
                <CommentsListing postComments={post.comments}/>
            </div>
            <div className="right-side">
                <BookingForm postId={post._id}/>
            </div>
        </section>
     );
}
 
export default PostLayout;