import { Button } from "@mui/material";
import FilterForm from "../components/FilterForm";

const MainLayout = ({children, setPostsFiltered, posts}) => {
    return ( 
        <>
        <h1 className="title-app">ThomasAuSki.com</h1>
        <Button variant="contained" href="/shop/connect" sx={{position: "absolute", right: "50px", top: "70px"}}>Se connecter</Button>
        <FilterForm setPostsFiltered={setPostsFiltered} posts={posts}/>
        {children}
        </>
     );
}
 
export default MainLayout;