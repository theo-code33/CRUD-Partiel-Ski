const checkImage = (imageURL, callback) => {
    const img = new Image()
    img.src = imageURL
    if(img.complete) {
        callback(true)
    }else{
        img.onload = () => {
            callback(true)
        }
        img.onerror = () => {
            callback(false)
        }
    }
}
export default checkImage