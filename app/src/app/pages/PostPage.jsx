import { useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams()
    return ( 
        <div>
            <h1>Post with id {id}</h1>
        </div>
     );
}
 
export default PostPage;