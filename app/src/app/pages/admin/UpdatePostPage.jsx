import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../../setup/services/post.service";

const UpdatePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const [credentials, setCredentials] = useState(null)

    const fetchPostData = async (id) => {
        try {
            const postResponse = await postService.getOneById(id)
            setPost(postResponse)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPostData(id)
    },[])
    return ( 
        <div>
            Update Post
        </div>
     );
}
 
export default UpdatePost;