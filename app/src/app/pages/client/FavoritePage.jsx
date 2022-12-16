import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import PostItem from "../../components/post/PostItem";
import MainLayout from "../../layout/MainLayout";
import ShopLayout from "../../layout/ShopLayout";

const FavoritePage = () => {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem("favorites"));
        if (favorite) {
            setFavorite(favorite);
        }
    }, [])
    return ( 
        <ShopLayout>
            <Button className="return-button" href="/" variant="contained">Retour</Button>
            <h1>Mes Favoris</h1>
            {favorite && favorite.length > 0 
            ? favorite.map((post) => (
                <PostItem key={post._id} post={post}/>
                ))
            :   <span className="error-listing">Désolé vous n'avez pas encore de favoris</span>
    }
        </ShopLayout>
     );
}
 
export default FavoritePage;