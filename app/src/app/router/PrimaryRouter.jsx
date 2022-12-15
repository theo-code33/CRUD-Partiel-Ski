import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectPage from "../pages/admin/ConnectPage";
import ShopPage from "../pages/admin/ShopPage";
import PostPage from "../pages/client/PostPage";
import PostsListingPage from "../pages/client/PostsListingPage";

const PrimaryRouter = () => {
    const [shopID, setShopID] = useState('')
    useEffect(() => {
        const shopIDLocalStorage = window.localStorage.getItem('shopID')
        setShopID(shopIDLocalStorage)
    }, [])
    return (
        <Routes>
            <Route path="/" element={<PostsListingPage />}/>
            <Route path="/*" element={<PostsListingPage />}/>
            <Route path="/post/:id" element={<PostPage />}/>
            <Route path="/shop/connect" element={<ConnectPage setShopID={setShopID} />} />
            <Route path="/shop/*" element={<ConnectPage setShopID={setShopID} />} />
            {shopID != null
                ? <Route path={`/shop/${shopID}`} element={<ShopPage />} />
                : null
            }
        </Routes>
     );
}
 
export default PrimaryRouter;