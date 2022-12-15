import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


const HeaderShop = ({shop}) => {
    const navigate = useNavigate()
    const handleDisconnect = () => {
        window.localStorage.removeItem('shopID')
        navigate('/')
    }

    return ( 
        <header className="header-shop">
            <Button variant="contained" onClick={handleDisconnect}>Déconnexion</Button>
            <Link to={`/shop/${shop._id}/parametres`}>
                <span className="shop-name">Welcome {shop.name} !</span>
                <div className="shop-image-container">
                    <img src={shop.logoUrl} alt={`Logo de la boutique ${shop.name}`} />
                </div>
            </Link>
        </header>
     );
}
 
export default HeaderShop;