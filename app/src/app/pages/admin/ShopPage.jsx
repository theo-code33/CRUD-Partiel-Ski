import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import shopService from "../../../setup/services/shop.service";
import HeaderShop from "../../components/shop/HeaderShop";
import ShopPostListing from "../../components/shop/ShopPostListing";
import ShopLayout from "../../layout/ShopLayout";

const ShopPage = ({shopID}) => {
    const [shop, setShop] = useState(null)
    const fetchShopData = async (shopID) => {
        try {
            const shopResponse = await shopService.getOneById(shopID)
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
            <Button href="/" className="return-button" variant="contained">Retour aux locations</Button>
            {shop &&
                <>
                    <HeaderShop shop={shop}/>
                    <ShopPostListing shopPosts={shop.posts} fetchShopData={fetchShopData} shopID={shopID}/>
                </>
            }
        </ShopLayout>    
    );
}
 
export default ShopPage;