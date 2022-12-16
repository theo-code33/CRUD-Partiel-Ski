import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../../setup/services/post.service";
import PostInformations from "../../components/post/PostInformations";
import PostLayout from "../../layout/PostLayout";

const PostPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [commentRating, setCommentRating] = useState([])
    const fetchPost = async () => {
        try {
            const response = await postService.getOneById(id)
            setPost(response)
        } catch (error) {
            console.log(error);
        }
    }
    const [ratingPost, setRatingPost] = useState(0)

    const calculateRating = () => {
        let ratingTotal = 0
        commentRating.forEach((rating) => {
            ratingTotal += +rating
        })
        const rating = ratingTotal / commentRating.length
        return rating
    }

    useEffect(() => {
        fetchPost()
    }, [])
    useEffect(() => {
        if(post){
            post.comments?.forEach((comment) => {
                setCommentRating(rating =>[...rating, comment.stars])
            })
        }
    }, [post])
    useEffect(() => {
        if(commentRating.length > 0){
            const rating = calculateRating()
            setRatingPost(rating)
        }
    }, [commentRating])
    return ( 
        <div>
            {post && 
                <PostLayout post={post} setCommentRating={setCommentRating}>
                    <PostInformations post={post} ratingPost={ratingPost}/>
                </PostLayout>
            }
        </div>
     );
}
 
export default PostPage;