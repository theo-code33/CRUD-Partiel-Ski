import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, StepLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkImage from "../../../setup/functions/checkImage.function";
import shopService from "../../../setup/services/shop.service";

const UpdateShopForm = ({shop}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [newLogo, setNewLogo] = useState(null)
    const [credentials, setCredentials] = useState({})
    const [error, setError] = useState(false)
    const [errorImg, setErrorImg] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setCredentials(shop)
        console.log(shop);
    }, [shop])

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'logoUrl') {
            checkImage(value, (result) => {
                if(result){
                    setNewLogo(value)
                    setErrorImg(false)
                    setCredentials({...credentials, logoUrl: value})
                }else{
                    setErrorImg(true)
                    return
                }
            } )
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

    const handleDelete = async () => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer cette boutique ? Cette action est irréversible et supprimera toutes les annonces liées à cette boutique.")
        if(confirm){
            try {
                const shopResponse = await shopService.remove(shop._id)
                if (shopResponse.message) {
                    setError(true)
                }else{
                    setCredentials({})
                    window.localStorage.removeItem('shopID')
                    navigate(`/`)
                }
            } catch (error) {
                console.log(error);
                setError(true)
            }
        }else{
            return
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return ( 
        <form onSubmit={handleSubmit} className="shop-form">
            {shop &&
            <>
                <StepLabel>Logo</StepLabel>
                <img src={newLogo ? newLogo : credentials.logoUrl } alt="Logo boutique" style={{width: '250px', height: '250px', borderRadius: '250px' ,objectFit: 'cover'}}/>
                <TextField name="logoUrl" id="logoUrl" type="url" variant="outlined" value={credentials.logoUrl} label="Logo" sx={{ width: '100%' }}  onInput={handleChange}/>
                {errorImg && <span className="error-fom" style={{width: "100%", color: 'red', fontWeight: 'bold'}}>L'image renseigné n'est pas valide</span>}
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
                {errorImg 
                ? <Button type="submit" variant="contained" sx={{width: '100%'}} disabled>Modifier la boutique</Button>
                : <Button type="submit" variant="contained" sx={{width: '100%'}}>Modifier la boutique</Button>
                }
                {error && <span className="error-form" style={{color: 'red', fontWeight: 'bold', textAlign: 'center', width: "100%"}}>Une Erreur est survenue. Veuillez réessayer ultérieument</span>}
                <Button className="delete-button" variant="contained" color="error" sx={{mt: 2, width: "100%"}} onClick={handleDelete}>Supprimer le compte</Button>
            </>
            }
        </form>
     );
}
 
export default UpdateShopForm;