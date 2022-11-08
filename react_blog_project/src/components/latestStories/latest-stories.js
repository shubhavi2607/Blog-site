import { Component } from "react";
import LatestStoriesRender from "./latest-stories-render";
import '../styles/latest-stories.css'
import axios from "axios";

class LatestStories extends Component{
    constructor(){
        super()
        this.state={
            data: []
        }
    }

    componentDidMount(){
        axios.get(global.config.base_url()+"/api/homepage/lateststories").then((response)=>{
            this.setState({
                data: response.data
            })
            
        })
        .catch((error)=>{
            console.log("Error ", error.message)
        })
    }
    render(){
        return(
            <div className="responsive">
            <hr className="divider" />
            <div className="latest-stories-container">
                {this.state.data.map((item, index) => (
                    <LatestStoriesRender key={item._id} data={item} index={index}/>
                ))}
            </div>
            <hr className="divider" />
            <div className="load-more view-more">
                <p>View More</p>
                <span>&rarr;</span>
            </div>
            </div>
        )
    }
}

export default LatestStories