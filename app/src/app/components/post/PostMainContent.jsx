const PostMainContent = ({post}) => {
    return ( 
        <div className="content-post">
            <h2>{post.title}</h2>
            <div className="container-info">
                <span>{post.price}€ / j</span>
                <span className="size">{post.size} cm</span>
            </div>
            <p>{post.address}</p>
        </div>
     );
}
 
export default PostMainContent;