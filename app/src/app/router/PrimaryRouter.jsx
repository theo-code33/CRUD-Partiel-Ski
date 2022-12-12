import { Routes, Route } from "react-router-dom";
import PostPage from "../pages/PostPage";
import PostsListingPage from "../pages/PostsListingPage";

const PrimaryRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<PostsListingPage />}/>
            <Route path="/post/:id" element={<PostPage />}/>
        </Routes>
     );
}
 
export default PrimaryRouter;