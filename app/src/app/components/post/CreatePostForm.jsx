import { Button, FormControl, InputLabel, MenuItem, Select, StepLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postService from "../../../setup/services/post.service";

const CreatePostForm = ({shopID}) => {
    const [imagePost, setImagePost] = useState(null);
    const [credentials, setCredentials] = useState({
        shop: `${shopID}`,
        title: '',
        description: '',
        weight: 0,
        size: 140,
        style: '',
        address: '',
        price: 0,
        imgUrl: '',
    })
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const minSize = 140;
    const maxSize = 190;

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'imgUrl') {
            if(!e.target.files[0]) return;
            const url = URL.createObjectURL(e.target.files[0])
            setImagePost(url)
            setCredentials({...credentials, [name]: url});
        }else{
            setCredentials({...credentials, [name]: value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(credentials.shop === ''){
            credentials.shop = window.localStorage.getItem('shopID')
        }
        try {
            const postResponse = await postService.create(credentials)
            if(postResponse.message){
                setError(true)
            }else{
                navigate(`/shop/${shopID}`)
            }
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <TextField name="title" id="title" type="text" variant="outlined" value={credentials.title} label="Titre" sx={{ width: '100%' }} required onInput={handleChange}/>
            <StepLabel>Image</StepLabel>
            {
                imagePost 
                ? <img src={imagePost} alt="preview" style={{width: '50%', height: '500px', objectFit: 'contain'}}/>
                : <div style={{background: 'grey', width: '50%', height: '500px'}}></div>
            }
            <TextField name="imgUrl" id="imgUrl" type="file" variant="outlined" sx={{ width: '100%' }} onInput={handleChange}/>
            <TextField name="description" id="description" type="text" variant="outlined" value={credentials.description} label="Description" sx={{ width: '100%' }} required onInput={handleChange}/>
            <TextField name="weight" id="weight" type="number" variant="outlined" value={credentials.weight} label="Poids" inputProps={{min: 0}} sx={{ width: '100%' }}  required onInput={handleChange}/>
            <TextField name="size" id="size" type="number" variant="outlined" value={credentials.size} label="Taille" sx={{ width: '100%' }} required inputProps={{min: minSize, max: maxSize, step: 5}} onInput={handleChange}/>
            <FormControl fullWidth required>
                <InputLabel id="style-label-select">Style</InputLabel>
                <Select 
                    name="style"
                    id="style"
                    variant="outlined"
                    value={credentials.style}
                    labelId="style-label-select"
                    label="Style"
                    sx={{ width: '100%' }}
                    onChange={handleChange}
                >
                    <MenuItem value="Freeride">Freeride</MenuItem>
                    <MenuItem value="Freestyle">Freestyle</MenuItem>
                    <MenuItem value="Piste">Piste</MenuItem>
                    <MenuItem value="Polyvalant">Polyvalant</MenuItem>
                </Select>
            </FormControl>
            <TextField name="address" id="address" type="text" variant="outlined" value={credentials.address} label="Adresse" sx={{ width: '100%' }} required onInput={handleChange}/>
            <TextField name="price" id="price" type="number" variant="outlined" value={credentials.price} label="Prix" sx={{ width: '100%' }} inputProps={{pattern: "[0-9]+([\.,][0-9]+)?", step:"0.01", min: 0}} required onInput={handleChange}/>
            <Button type="submit" variant="contained" sx={{mt: 2}}>Créer</Button>
            {error && <span className="error-fom">Une Erreur est survenue. Veuillez réessayer ultérieument</span>}
        </form>
     );
}
 
export default CreatePostForm;