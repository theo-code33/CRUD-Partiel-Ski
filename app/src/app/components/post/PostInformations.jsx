import { Rating } from "@mui/material";
import PostMainContent from "./PostMainContent";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";

const PostInformations = ({post, ratingPost}) => {

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(window.localStorage.getItem('favorites'))
        if (favorites) {
            const isFavorite = favorites.find(favorite => favorite._id === post._id)
            if (isFavorite) {
                setIsFavorite(true)
            }
        }
    }, [])

    const handleFavorite = () => {
        const favorites = JSON.parse(window.localStorage.getItem('favorites'))
        if(!isFavorite){
            if (favorites) {
                const postFavorite = window.localStorage.setItem('favorites', JSON.stringify([...favorites, post]))
            }else{
                const postFavorite = window.localStorage.setItem('favorites', JSON.stringify([post]))
            }
        }else{
            if (favorites) {
                const postFavorite = window.localStorage.setItem('favorites', JSON.stringify([...favorites.filter(favorite => favorite._id !== post._id)]))
            }else{
                const postFavorite = window.localStorage.setItem('favorites', JSON.stringify([]))
            }
        }
        setIsFavorite((isFavorite) => !isFavorite);
    }

    const handleMouseDownFavorite = (event) => {
        event.preventDefault();
    };

    return ( 
        <div className="container-content-post">
            <div className="img-container">
                <img src={post.imgUrl ? post.imgUrl : '/skiing-with-a-view-over-the-mountains.jpg'} alt={`Image du post ${post.title}`} />
            </div>
            <div className="post-content">
                <div className="post-content-top">
                    <Rating name="rating" value={ratingPost} readOnly />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleFavorite}
                        onMouseDown={handleMouseDownFavorite}
                        edge="end"
                        >
                        {isFavorite ? <FavoriteIcon color="error" fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/>}
                    </IconButton>
                </div>
                <PostMainContent post={post}/>
                <p>{post.description}</p>
            </div>
        </div>
     );
}
 
export default PostInformations;