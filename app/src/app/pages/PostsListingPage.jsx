import { useEffect, useState } from "react"
import postService from "../../setup/services/post.service"
import MainLayout from "../layout/MainLayout"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const fetchPost = async () => {
        try {
          const response = await postService.getAll()
          setPosts(response)
        } catch (error) {
          console.log(error);
        }
    }
    useEffect(() => {
        fetchPost()
    },[])
    return ( 
      <MainLayout>
        <section>
            <h1>Page Posts</h1>
        </section>
      </MainLayout>
     );
}
 
export default Posts;