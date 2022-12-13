import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

const CommentsListing = ({postComments}) => {
    const [comments, setComments] = useState(null)
    useEffect(() => {
        setComments([...postComments])
    }, [])
    return ( 
        <>
            {comments && comments.map((comment) => (
                    <div key={comment._id}>
                        <div>
                            <h4>{comment.username}</h4>
                            <Rating readOnly value={comment.stars}/>
                        </div>
                        <div>
                            <p>{comment.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
     );
}
 
export default CommentsListing;