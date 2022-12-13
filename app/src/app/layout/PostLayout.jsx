import { Button } from "@mui/material";
import BookingForm from "../components/booking/BookingForm";
import CommentForm from "../components/comment/CommentForm";

const PostLayout = ({children, postId}) => {
    return ( 
        <section className="post-layout">
            <Button variant="contained" href="/">Retour</Button>
            <div className="left-side">
                {children}
                <CommentForm postId={postId}/>
            </div>
            <div className="right-side">
                <BookingForm postId={postId}/>
            </div>
        </section>
     );
}
 
export default PostLayout;