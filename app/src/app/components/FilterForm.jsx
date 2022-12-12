const FilterForm = () => {
    const createOptionSize = () => {
        const options = []
        const minSize = 140
        const step = 5
        const maxSize = 190
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
            <input type="text" name="search" id="search" placeholder="Rechercher par adresse" />
            <select name="weight" id="weight" defaultValue="" >
                <option value="" disabled>Rechercher par Poids</option>
                <option value="0-45">Moins de 45kg</option>
                <option value="45-65">Entre 45kg et 65kg</option>
                <option value="65+">Plus de 65kg</option>
            </select>
            <select name="style" id="style" defaultValue="">
                <option value="" disabled>Rechercher par Style</option>
                <option value="freeride">Freeride</option>
                <option value="freestyle">Freestyle</option>
                <option value="piste">Piste</option>
                <option value="polyvalent">Polyvalent</option>
            </select>
            <select name="size" id="size" defaultValue="">
                <option value="" disabled>Rechercher par Taille</option>
                {createOptionSize()}
            </select>
        </form>
     );
}
 
export default FilterForm;