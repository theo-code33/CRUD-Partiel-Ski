import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, StepLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import shopService from "../../../setup/services/shop.service";

const UpdateShopForm = ({shop}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [newLogo, setNewLogo] = useState(null)
    const [credentials, setCredentials] = useState({})
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setCredentials(shop)
        console.log(shop);
    }, [shop])

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'logoUrl') {
            if(!e.target.files[0]) return;
            const url = URL.createObjectURL(e.target.files[0])
            setNewLogo(url)
            setCredentials({...credentials, [name]: url});
        }else{
            setCredentials({...credentials, [name]: value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const shopResponse = await shopService.update(shop._id, credentials)
            if (shopResponse.message) {
                setError(true)
            }else{
                setCredentials({})
                navigate(`/shop/${shop._id}`)
            }
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <Button href={`/shop/${shop._id}`} variant="contained">Retour</Button>
            {shop &&
            <>
                <StepLabel>Logo</StepLabel>
                <img src={newLogo ? newLogo : credentials.logoUrl } alt="Logo boutique" style={{width: '250px', height: '250px', borderRadius: '250px' ,objectFit: 'cover'}}/>
                <TextField name="logoUrl" id="logoUrl" type="file" variant="outlined" sx={{ width: '100%' }}  onInput={handleChange}/>
                <TextField name="name" id="name" type="text" variant="outlined" value={credentials.name} label="Nom" sx={{ width: '100%' }}  onInput={handleChange}/>
                <TextField name="email" id="email" autoComplete="email" type="email" variant="outlined" value={credentials.email} label="Email" sx={{ width: '100%' }}  onInput={handleChange}/>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="password">Mot de passe</InputLabel>
                    <OutlinedInput
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        onInput={handleChange}
                        value={credentials.password}
                        inputProps={{ minLength: 6 }}
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
                <TextField name="address" id="address" type="text" variant="outlined" value={credentials.address} label="Adresse" sx={{ width: '100%' }}  onInput={handleChange}/>
                <Button type="submit" variant="contained">Modifier la boutique</Button>
                {error && <span className="error-fom">Une Erreur est survenue. Veuillez réessayer ultérieument</span>}
            </>
            }
        </form>
     );
}
 
export default UpdateShopForm;