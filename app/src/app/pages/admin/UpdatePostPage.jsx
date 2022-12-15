import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../../setup/services/post.service";
import UpdatePostForm from "../../components/post/UpdatePostForm";

const UpdatePost = ({shopID}) => {
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
            {post &&
                <UpdatePostForm post={post} shopID={shopID}/>
            }
        </div>
     );
}
 
export default UpdatePost;