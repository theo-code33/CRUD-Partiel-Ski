import { Button, Rating, TextField } from "@mui/material";
import { useState } from "react";
import commentsService from "../../../setup/services/comment.service";

const CommentForm = ({postId, setComments}) => {
    const [credentials, setCredentials] = useState({
        post: postId,
        username: '',
        description: '',
        stars: 0
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
            const response = await commentsService.create(credentials)
            setComments((comments) => [...comments, response])

            setCredentials({
                post: postId,
                username: '',
                description: '',
                stars: '0'
            })
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <Rating name="stars" id="stars" onInput={handleChange} />
                <TextField name="username" id="username" variant="outlined" value={credentials.username} label="Votre Nom" onInput={handleChange} />
                <TextField 
                    name="description"
                    id="description"
                    multiline 
                    rows={6} 
                    variant="outlined"
                    label="Votre commentaire"
                    value={credentials.description}
                    onInput={handleChange} 
                />
                <Button type="submit" variant="contained">Ajouter un commentaire</Button>
            </form>
        </div>
     );
}
 
export default CommentForm;