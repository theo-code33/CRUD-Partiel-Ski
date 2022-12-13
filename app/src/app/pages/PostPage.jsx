import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../setup/services/post.service";
import PostInformations from "../components/post/PostInformations";
import PostLayout from "../layout/PostLayout";

const PostPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
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
            {post && 
                <PostLayout post={post}>
                    <PostInformations post={post}/>
                </PostLayout>
            }
        </div>
     );
}
 
export default PostPage;