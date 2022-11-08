import { Link } from "react-router-dom"

const PostLink = (props)=> {
    return(
        <Link className="post-link" to={{
            pathname: '/category/post',
            search: "id="+props.post_id
            }}>{props.title}
        </Link>
    )
}

export default PostLink