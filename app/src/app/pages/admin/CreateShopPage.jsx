import { Button } from "@mui/material";
import CreateShopForm from "../../components/shop/CreateShopForm";
import ShopLayout from "../../layout/ShopLayout";

const CreateShopPage = () => {
    return ( 
        <ShopLayout>
            <Button className="return-button" href="/shop/connect" variant="contained">Retour</Button>
            <h1>Créer une nouvelle boutique</h1>
            <CreateShopForm/>
        </ShopLayout>
     );
}
 
export default CreateShopPage;