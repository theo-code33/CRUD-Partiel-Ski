import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectPage from "../pages/admin/ConnectPage";
import ShopPage from "../pages/admin/ShopPage";
import PostPage from "../pages/client/PostPage";
import PostsListingPage from "../pages/client/PostsListingPage";

const PrimaryRouter = () => {
    const [isConnected, setIsConnected] = useState('')
    useEffect(() => {
        const isConnectedLocalStorage = window.localStorage.getItem('isConnected')
        setIsConnected(isConnectedLocalStorage)
    }, [])
    return (
        <Routes>
            <Route path="/" element={<PostsListingPage />}/>
            <Route path="/post/:id" element={<PostPage />}/>
            <Route path="/shop/connect" element={<ConnectPage />} />
            {isConnected === 'true'
                ? <Route path="/shop/:id" element={<ShopPage />} />
                : <Route path="/shop/*" element={<ConnectPage />} />
            }
        </Routes>
     );
}
 
export default PrimaryRouter;