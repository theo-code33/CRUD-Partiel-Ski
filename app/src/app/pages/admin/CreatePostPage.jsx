import { Button } from "@mui/material";
import CreatePostForm from "../../components/post/CreatePostForm";
import ShopLayout from "../../layout/ShopLayout";

const CreatePostPage = ({shopID}) => {
    return ( 
        <ShopLayout>
            <div>
                <Button href={`/shop/${shopID}`} variant="contained">Retour</Button>
                <h1>Créer une nouvelle location</h1>
                <CreatePostForm shopID={shopID}/>
            </div>
        </ShopLayout>
     );
}
 
export default CreatePostPage;