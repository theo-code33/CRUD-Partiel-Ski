import { Button, TextField } from "@mui/material";
import { useState } from "react";
import bookingsService from "../../../setup/services/booking.service";

const BookingForm = ({postId}) => {
    const [credentials, setCredentials] = useState({
        post: postId,
        telephoneNumber: ''
    })
    const [isAvailable, setIsAvailable] = useState(true)
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
            await bookingsService.create(credentials)
            setIsAvailable(false)
            setCredentials({
                post: postId,
                telephoneNumber: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Réserver cet location ?</h2>
                <span>Vous pouvez réserver cet location avec simplement votre numéro de téléphone</span>
            </div>
            <TextField id="telephoneNumber" name="telephoneNumber" label="Numéro de téléphone" variant="outlined" value={credentials.telephoneNumber} onInput={handleChange} inputProps={{minLength: 10}} required/>
            {isAvailable 
            ? <Button type="submit" variant="contained">Réserver</Button>
            : <Button type="submit" variant="contained" disabled>Réserver</Button>
            }
            
        </form>
     );
}
 
export default BookingForm;