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
            result = value ? posts.filter((post) => post[name] == value) : posts;
        }
        setPostsFiltered(result)
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
            <option key={option} value={option}>{option}</option>
        ))
    }
    return ( 
        <form>
            <input type="text" name="search" id="search" placeholder="Rechercher par adresse" onInput={handleFilter}/>
            <select name="weight" id="weight" defaultValue="" onChange={handleFilter} >
                <option value="">Rechercher par Poids</option>
                <option value="0-45">Moins de 45kg</option>
                <option value="45-65">Entre 45kg et 65kg</option>
                <option value="65+">Plus de 65kg</option>
            </select>
            <select name="style" id="style" defaultValue="" onChange={handleFilter}>
                <option value="">Rechercher par Style</option>
                <option value="Freeride">Freeride</option>
                <option value="Freestyle">Freestyle</option>
                <option value="Piste">Piste</option>
                <option value="Polyvalent">Polyvalent</option>
            </select>
            <select name="size" id="size" defaultValue="" onChange={handleFilter}>
                <option value="">Rechercher par Taille</option>
                {createOptionSize()}
            </select>
        </form>
     );
}
 
export default FilterForm;