import { Button } from "@mui/material";
import FilterForm from "../components/FilterForm";

const MainLayout = ({children, setPostsFiltered, posts, shopID}) => {
    return ( 
        <>
        <h1 className="title-app">ThomasAuSki.com</h1>
        {shopID
        ? <Button variant="contained" href={`/shop/${shopID}`} sx={{position: "absolute", right: "50px", top: "70px"}}>Ma Boutique</Button>
        : <Button variant="contained" href="/shop/connect" sx={{position: "absolute", right: "50px", top: "70px"}}>Se connecter</Button>
        }
        <FilterForm setPostsFiltered={setPostsFiltered} posts={posts}/>
        {children}
        </>
     );
}
 
export default MainLayout;