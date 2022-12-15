import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectPage from "../pages/admin/ConnectPage";
import CreatePostPage from "../pages/admin/CreatePostPage";
import ParameterPage from "../pages/admin/ParameterPage";
import ShopPage from "../pages/admin/ShopPage";
import UpdatePost from "../pages/admin/UpdatePostPage";
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
            <Route path="/" element={<PostsListingPage shopID={shopID}/>}/>
            <Route path="/*" element={<PostsListingPage shopID={shopID} />}/>
            <Route path="/post/:id" element={<PostPage />}/>
            <Route path="/shop/connect" element={<ConnectPage setShopID={setShopID} />} />
            <Route path="/shop/*" element={<ConnectPage setShopID={setShopID} />} />
            {shopID != null && (
                <>
                    <Route path={`/shop/${shopID}`} element={<ShopPage shopID={shopID} />} />
                    <Route path={`/shop/${shopID}/parametres`} element={<ParameterPage shopID={shopID} />} />
                    <Route path='/post/update/:id' element={<UpdatePost shopID={shopID} />}/>
                    <Route path='/post/create' element={<CreatePostPage shopID={shopID} />}/>
                </>
            )
            }
        </Routes>
     );
}
 
export default PrimaryRouter;