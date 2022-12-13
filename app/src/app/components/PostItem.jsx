import { Link } from "react-router-dom";

const PostItem = ({post}) => {
    return ( 
        <div>
            <Link to={`/post/${post._id}`}>
                <div className="image-container">
                    <img src={post.imgUrl ? post.imgUrl : '/skiing-with-a-view-over-the-mountains.jpg'} alt={`Image du post ${post.title}`} />
                </div>
                <div className="content-post">
                    <h2>{post.title}</h2>
                    <div>
                        <span>{post.price}€ / j</span>
                        <span>{post.size} cm</span>
                    </div>
                    <p>{post.address}</p>
                </div>
            </Link>
        </div>
     );
}
 
export default PostItem;