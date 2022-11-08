import SubHeading from "./subheading"
import TopPosts from "./topPosts-sidebar/top-posts"
import "./styles/sidebar.css"
import Spacer from "./spacer"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Spacer spacing={"30px"}/>
            <div>
                <SubHeading subheading={"Top Posts"}/>
                <TopPosts />
            </div>
        </div>
    )
}

export default Sidebar