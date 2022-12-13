import { useEffect, useState } from "react"
import postService from "../../setup/services/post.service"
import PostItem from "../components/PostItem"
import MainLayout from "../layout/MainLayout"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postsFiltered, setPostsFiltered] = useState([])
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
    useEffect(() => {
      setPostsFiltered([...posts])
    },[posts])
    return ( 
      <MainLayout setPostsFiltered={setPostsFiltered} posts={posts}>
        <section>
            <h1>Page Posts</h1>
            {
              postsFiltered.length > 0 
              ? postsFiltered.map((post) => (
                <PostItem key={post._id} post={post} />
              )) 
              : <span>Désolé votre recherche ne correspond avec aucune annonces</span>
            }
        </section>
      </MainLayout>
     );
}
 
export default Posts;