import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const FilterForm = ({setPostsFiltered, posts}) => {
    const handleFilter = (e) => {
        const { name, value } = e.target
        let result;
        if (name === "search") {
            result = value ? posts.filter((post) => post.address.toLowerCase().includes(value.toLowerCase())) : posts
        }else if(name === "weight" ){
            switch(value){
                case '0-45':{
                    result = value ? posts.filter((post) => post.weight < 45) : posts;
                    break;
                }
                case '45-65':{
                    result = value ? posts.filter((post) => post.weight >= 45 && post.weight <= 65 ) : posts;
                    break;
                }
                case '65+':{
                    result = value ? posts.filter((post) => post.weight > 65 ) : posts;
                    break;
                }
                default:  {
                    result = posts
                }
            }
        }else{
            result = value ? posts.filter((post) => post[name] === value) : posts;
        }
        setPostsFiltered(result)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const createOptionSize = () => {
        const minSize = 140
        const maxSize = 190
        const step = 5
        const options = []
        let index = minSize
        do {
            options.push(index)
            index += step
        } while (index <= maxSize);
        return options.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
        ))
    }
    return ( 
        <form onSubmit={handleSubmit} className="filter-form">
            <span>Filter par :</span>
            <TextField variant="outlined" name="search" id="search" label="Rechercher par adresse" onInput={handleFilter} sx={{width: "20%"}}/>
            <FormControl sx={{width: "20%"}}>
                <InputLabel id="weight-label">Rechercher par Poids</InputLabel>
                <Select
                    labelId="weight-label"
                    id="weight"
                    name="weight"
                    label="Rechercher par Poids"
                    onChange={handleFilter}
                >
                    <MenuItem value="">Rechercher par Poids</MenuItem>
                    <MenuItem value="0-45">Moins de 45kg</MenuItem>
                    <MenuItem value="45-65">Entre 45kg et 65kg</MenuItem>
                    <MenuItem value="65+">Plus de 65kg</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{width: "20%"}}>
                <InputLabel id="style-label">Rechercher par Style</InputLabel>
                <Select
                    labelId="style-label"
                    id="style"
                    name="style"
                    label="Rechercher par Style"
                    onChange={handleFilter}
                >
                    <MenuItem value="">Rechercher par Style</MenuItem>
                    <MenuItem value="Freeride">Freeride</MenuItem>
                    <MenuItem value="Freestyle">Freestyle</MenuItem>
                    <MenuItem value="Piste">Piste</MenuItem>
                    <MenuItem value="Polyvalent">Polyvalent</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{width: "20%"}}>
                <InputLabel id="size-label">Rechercher par Taille</InputLabel>
                <Select
                    labelId="size-label"
                    id="size"
                    name="size"
                    label="Rechercher par Taille"
                    onChange={handleFilter}
                >
                    <MenuItem value="">Rechercher par Taille</MenuItem>
                    {createOptionSize()}
                </Select>
            </FormControl>
        </form>
     );
}
 
export default FilterForm;