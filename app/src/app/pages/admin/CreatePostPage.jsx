import { Button } from "@mui/material";
import { Box } from "@mui/system";
import CreatePostForm from "../../components/post/CreatePostForm";
import ShopLayout from "../../layout/ShopLayout";

const CreatePostPage = ({shopID}) => {
    return ( 
        <ShopLayout>
            <div>
                <Button className="return-button" href={`/shop/${shopID}`} variant="contained">Retour</Button>
                <Box
                    sx={{
                        height: 400, 
                        width: '90%',
                        margin: '100px auto 0'
                    }}
                >
                    <h1>Créer une nouvelle location</h1>
                    <CreatePostForm shopID={shopID}/>
                </Box>
            </div>
        </ShopLayout>
     );
}
 
export default CreatePostPage;