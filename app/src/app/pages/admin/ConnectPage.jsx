import { useEffect, useState } from "react";
import shopService from "../../../setup/services/shop.service";
import ConnectFormShop from "../../components/shop/ConnectFormShop";
import ShopLayout from "../../layout/ShopLayout";

const ConnectPage = ({setShopID}) => {
    return (
        <ShopLayout>
            <section className="connect-page">
                <h1>Se connecter</h1>
                <ConnectFormShop setShopID={setShopID}/>
            </section>
        </ShopLayout>
     );
}
 
export default ConnectPage;