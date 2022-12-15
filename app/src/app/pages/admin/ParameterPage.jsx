import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import shopService from "../../../setup/services/shop.service";
import UpdateShopForm from "../../components/shop/UpdateShopForm";
import ShopLayout from "../../layout/ShopLayout";

const ParameterPage = ({shopID}) => {
    const [shop, setShop] = useState(null)
    const fetchShopData = async (id) => {
        try {
            const shopResponse = await shopService.getOneById(id)
            setShop(shopResponse)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchShopData(shopID)
    },[])

    return ( 
        <ShopLayout>
            <Button className="return-button" href={`/shop/${shopID}`} variant="contained">Retour</Button>
            {shop &&
            <Box
                sx={{
                    height: 400, 
                    width: '90%',
                    margin: '100px auto 0'
                }}
            >
                <UpdateShopForm shop={shop}/>
            </Box>
            }
        </ShopLayout>
     );
}
 
export default ParameterPage;