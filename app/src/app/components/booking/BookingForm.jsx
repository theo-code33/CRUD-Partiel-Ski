import { Button, TextField } from "@mui/material";
import { useState } from "react";
import bookingsService from "../../../setup/services/booking.service";

const BookingForm = ({postId}) => {
    const [credentials, setCredentials] = useState({
        post: postId,
        telephoneNumber: ''
    })
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
            const response = await bookingsService.create(credentials)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="telephoneNumber" name="telephoneNumber" label="Numéro de téléphone" variant="outlined" onInput={handleChange}/>
                <Button type="submit" variant="contained">Réserver</Button>
            </form>
        </div>
     );
}
 
export default BookingForm;