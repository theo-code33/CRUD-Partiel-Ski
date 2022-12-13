import { Button } from "@mui/material";
import BookingForm from "../components/booking/BookingForm";
import CommentForm from "../components/comment/CommentForm";

const PostLayout = ({children}) => {
    return ( 
        <section className="post-layout">
            <Button variant="contained" href="/">Retour</Button>
            <div className="left-side">
                {children}
                <CommentForm />
            </div>
            <div className="right-side">
                <BookingForm />
            </div>
        </section>
     );
}
 
export default PostLayout;