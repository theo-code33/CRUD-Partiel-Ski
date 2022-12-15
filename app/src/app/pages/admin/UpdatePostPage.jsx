import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../../setup/services/post.service";
import UpdatePostForm from "../../components/post/UpdatePostForm";
import ShopLayout from "../../layout/ShopLayout";

const UpdatePost = ({shopID}) => {
    const { id } = useParams();
    const [post, setPost] = useState(null)

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
        <ShopLayout>
            <Button href={`/shop/${shopID}`} className="return-button" variant='contained' sx={{mb: 2}}>Retour</Button>
            {post &&
            <Box
                sx={{
                    height: 400, 
                    width: '90%',
                    margin: '100px auto 0'
                }}
            >
                <h1>Mettre à jour la location {post.title}</h1>
                <UpdatePostForm post={post} shopID={shopID}/>
            </Box>
            }
        </ShopLayout>
     );
}
 
export default UpdatePost;