import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../setup/services/post.service";

const PostPage = () => {
    const [post, setPost] = useState([])
    const { id } = useParams()
    const fetchPost = async () => {
        try {
            const response = await postService.getOneById(id)
            setPost(response)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPost()
    }, [])
    return ( 
        <div>
            <h1>Post with id {id}</h1>
        </div>
     );
}
 
export default PostPage;