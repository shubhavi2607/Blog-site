import { Component } from "react";
import TopPostsRender from "./top-posts-render";
import '../styles/top-posts.css'
import axios from "axios";

class TopPosts extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        }     
    }

    componentDidMount(){
        axios.get(global.config.base_url()+"/api/sidebar/top-post").then((response)=>{
            this.setState({
                data: response.data
            })
            console.log(global.config.base_url())
            
        })
        .catch((error)=>{
            console.log("Error ", error.message)
        })
    }


    
    render(){


        return(
            <div className="top-posts-container">
                {this.state.data.map((item, index)=>{
                    return <TopPostsRender key={item._id} data={item} index={index} className={"column"}/>
                })}
                
            </div>
        )
    }
}

export default TopPosts