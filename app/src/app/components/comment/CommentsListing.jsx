import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

const CommentsListing = ({comments}) => {
    
    return ( 
        <section className="container-listing-comments">
            {comments && comments.map((comment) => (
                    <div key={comment._id} className="comment-item">
                        <div className="top-comment">
                            <h4>{comment.username}</h4>
                            <Rating readOnly value={comment.stars}/>
                        </div>
                        <div className="bottom-comment">
                            <p>{comment.description}</p>
                        </div>
                    </div>
                ))
            }
        </section>
     );
}
 
export default CommentsListing;