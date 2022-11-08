import axios from "axios";
import { Component } from "react";
import MetaDisplay from "./meta-display";
import PostLink from "./post-link";
import './styles/thelatest.css'

class TheLatest extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get(global.config.base_url()+"/api/homepage/thelatest").then((response)=>{
            this.setState({
                data: response.data
            })
            
        })
        .catch((error)=>{
            console.log("Error ", error.message)
        })
    }
    render() {
        return(
            <div className="thelatest-container">
            {this.state.data.map(item=>(
                <div className="thelatest" key={item._id}>
                    <img alt="" src={item["featured-img"]} />
                    <div className="card-content">
                    <h2><PostLink post_id={item._id} title={item.title} /></h2>
                        <p className="description">{item.excerpt}</p>
                        <MetaDisplay meta={item} />
                    </div>
                    
                </div>
            ))}
        
            </div>
        )
    }
}

export default TheLatest