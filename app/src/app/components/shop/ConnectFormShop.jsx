import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shopService from "../../../setup/services/shop.service";

const ConnectFormShop = ({setShopID}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [credentials, setCredentials] = useState({})
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const shop = await shopService.getOne(credentials)
            if(shop.length <= 0){
                setError(true)
                return
            }else{
                window.localStorage.setItem('shopID', shop[0]._id)
                setShopID(shop[0]._id)
                navigate(`/shop/${shop[0]._id}`)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return ( 
        <form className="form-connect" onSubmit={handleSubmit}>
            <TextField name="email" id="email" type="email" variant="outlined" label="Email" autoComplete="email" sx={{ width: '100%' }} onInput={handleChange} required/>
            <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="password">Mot de passe</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    onInput={handleChange}
                    required
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Mot de passe"
                />
            </FormControl>
            {error && 
                <span className="error-connexion">Il y a une erreur. Veuillez vérifier que votre Email et votre Mot de Passe soient les bons</span>
            }
            <Button type="submit" variant="contained" sx={{width: '100%'}}>Connexion</Button>
            <Button href="/shop/create" sx={{width: '100%'}}>Pas encore de boutique ? Créé en une maintenant !</Button>

        </form>
     );
}
 
export default ConnectFormShop;