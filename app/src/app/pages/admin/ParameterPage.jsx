import { useEffect, useState } from "react";
import shopService from "../../../setup/services/shop.service";
import UpdateShopForm from "../../components/shop/UpdateShopForm";

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
        <div>
            {shop &&
                <UpdateShopForm shop={shop}/>
            }
        </div>
     );
}
 
export default ParameterPage;