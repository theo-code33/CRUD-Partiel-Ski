import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkImage from "../../../setup/functions/checkImage.function";
import postService from "../../../setup/services/post.service";

const UpdatePostForm = ({post, shopID}) => {
    const [imagePost, setImagePost] = useState(null);
    const [credentials, setCredentials] = useState({
        shop: post.shop,
        title: post.title,
        description: post.description,
        weight: post.weight,
        size: post.size,
        style: post.style,
        address: post.address,
        price: post.price,
        imgUrl: post.imgUrl,
        isAvailable: post.isAvailable,
    })
    const [error, setError] = useState(false)
    const [errorImg, setErrorImg] = useState(false)

    const navigate = useNavigate()

    const minSize = 140;
    const maxSize = 190;

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'imgUrl') {
            checkImage(value, (result) => {
                if(result){
                    setImagePost(value)
                    setErrorImg(false)
                    setCredentials({...credentials, imgUrl: value})
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
        e.preventDefault();
        if(credentials.shop === ''){
            credentials.shop = window.localStorage.getItem('shopID')
        }
        try {
            const postResponse = await postService.update(post._id, credentials)
            if(postResponse.message){
                setError(true)
            }else{
                navigate(`/shop/${shopID}`)
            }
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }
    return ( 
        <form onSubmit={handleSubmit} className="post-form">
            {post && 
            <>
                <TextField name="title" id="title" type="text" variant="outlined" value={credentials.title} label="Titre" sx={{ width: '100%' }} required onInput={handleChange}/>
                <img src={imagePost ? imagePost : credentials.imgUrl} alt="preview" style={{width: '50%', height: '500px', objectFit: 'contain'}}/>
                <TextField name="imgUrl" id="imgUrl" type="url" variant="outlined" label="Image" sx={{ width: '100%' }} onInput={handleChange}/>
                {errorImg && <span className="error-fom" style={{width: "100%", color: 'red', fontWeight: 'bold'}}>L'image renseign?? n'est pas valide</span>}
                <TextField name="description" id="description" type="text" variant="outlined" value={credentials.description} label="Description" sx={{ width: '100%' }} required onInput={handleChange}/>
                <TextField name="weight" id="weight" type="number" variant="outlined" value={credentials.weight} label="Poids" sx={{ width: '100%' }}  required onInput={handleChange}/>
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
                        <MenuItem value="Freeride" selected={credentials.style === 'Freeride'}>Freeride</MenuItem>
                        <MenuItem value="Freestyle" selected={credentials.style === 'Freestyle'}>Freestyle</MenuItem>
                        <MenuItem value="Piste" selected={credentials.style === 'Piste'}>Piste</MenuItem>
                        <MenuItem value="Polyvalant" selected={credentials.style === 'Polyvalant'}>Polyvalant</MenuItem>
                    </Select>
                </FormControl>
                <TextField name="address" id="address" type="text" variant="outlined" value={credentials.address} label="Adresse" sx={{ width: '100%' }} required onInput={handleChange}/>
                <TextField name="price" id="price" type="number" variant="outlined" value={credentials.price} label="Prix" sx={{ width: '100%' }} inputProps={{pattern: "[0-9]+([\.,][0-9]+)?", step:"0.01", min: 0}} required onInput={handleChange}/>
                <FormControl fullWidth required>
                    <InputLabel id="isAvailable-label-select">Disponibilit??</InputLabel>
                    <Select
                        name="isAvailable"
                        id="isAvailable"
                        variant="outlined"
                        value={credentials.isAvailable}
                        labelId="isAvailable-label-select"
                        label="Disponibilit??"
                        sx={{ width: '100%' }}
                        onChange={handleChange}
                    >
                        <MenuItem value={true} selected={credentials.isAvailable === true}>Disponible</MenuItem>
                        <MenuItem value={false} selected={credentials.isAvailable === false}>Indisponible</MenuItem>
                    </Select>
                    {credentials.isAvailable}
                </FormControl>
                {errorImg 
            ? <Button type="submit" variant="contained" sx={{mt: 2, width: '100%'}} disabled>Modifier</Button>
            : <Button type="submit" variant="contained" sx={{mt: 2, width: '100%'}}>Modifier</Button>
            }
                {error && <span className="error-fom">Une Erreur est survenue. Veuillez r??essayer ult??rieument</span>}
            </>
            }
        </form>
     );
}
 
export default UpdatePostForm;