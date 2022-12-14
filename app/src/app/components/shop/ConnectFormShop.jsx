import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shopService from "../../../setup/services/shop.service";

const ConnectFormShop = ({shops}) => {
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
                window.localStorage.setItem('isConnected', true)
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
            <TextField name="email" id="email" type="email" variant="outlined" label="Email" autoComplete="email" sx={{ m: 1, width: '20%' }} onInput={handleChange} required/>
            <FormControl sx={{ m: 1, width: '20%' }} variant="outlined">
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
            <Button type="submit" variant="contained">Connexion</Button>
            {error && 
                <span>Il y a une erreur</span>
            }
        </form>
     );
}
 
export default ConnectFormShop;