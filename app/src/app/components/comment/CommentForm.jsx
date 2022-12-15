import { Button, Rating, TextField } from "@mui/material";
import { useState } from "react";
import commentsService from "../../../setup/services/comment.service";

const CommentForm = ({postId, setComments, setCommentRating}) => {
    const [credentials, setCredentials] = useState({
        post: postId,
        username: '',
        description: '',
        stars: ''
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
            setCommentRating((commentRating) => [...commentRating, credentials.stars])
            setCredentials({
                post: postId,
                username: '',
                description: '',
                stars: ''
            })
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <form onSubmit={handleSubmit} className="comment-form">
            <Rating name="stars" id="stars" onInput={handleChange} size="large" required/>
            <TextField name="username" id="username" variant="outlined" value={credentials.username} label="Votre Nom" onInput={handleChange} required />
            <TextField 
                name="description"
                id="description"
                multiline 
                rows={6} 
                variant="outlined"
                label="Votre commentaire"
                value={credentials.description}
                onInput={handleChange} 
                required
            />
            {credentials.stars === '' 
                ? <Button type="submit" variant="contained" disabled>Ajouter un commentaire</Button>
                : <Button type="submit" variant="contained">Ajouter un commentaire</Button>
            }
        </form>
     );
}
 
export default CommentForm;