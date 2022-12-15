import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import postService from "../../../setup/services/post.service";

const ActionsRow = ({params, fetchShopData, shopID}) => {

    const handleDelete = async (e) => {
        e.stopPropagation()
        try {
            await postService.remove(params.id)
            fetchShopData(shopID)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Box display="flex" justifyContent="space-around">
            <Link to={`/post/update/${params.row._id}`} style={{textDecoration: "none"}}>
                <Button variant="contained" color="primary" size="small">
                    Editer
                </Button>
            </Link>
            <Button variant="contained" color="secondary" size="small" sx={{ml: 2}} onClick={handleDelete}>
                Supprimer
            </Button>
        </Box>
     );
}
 
export default ActionsRow;