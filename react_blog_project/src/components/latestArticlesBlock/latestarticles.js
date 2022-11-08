import axios from "axios";
import { Component } from "react";
import Category2 from "../latestArticlesCategory2/category2";
import Sidebar from "../sidebar";
import '../styles/latest-articles.css'
import LatestArticlesRender from "./latestarticles-render";

class LatestArticles extends Component {

    constructor(){
        super()
        this.state={
            data: []
        }
    }

    componentDidMount(){
        axios.get(global.config.base_url()+"/api/homepage/latestarticles").then((response)=>{
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
            <div className="latestarticles-container">
                <div className="latestarticles">
                    {this.state.data.map((value, index) => {
                        if(index === 0){
                            return <LatestArticlesRender key={value._id} data={value} stateisBig={true}/>
                        }
                        else {
                            return <LatestArticlesRender key={value._id} data={value} stateisBig={false}/>
                        }
                        
                    })}
                    <div className="load-more">
                        <span>&darr;</span>
                        <p>Load More</p>
                        <span>&rarr;</span>
                        
                        
                    </div>

                    <Category2 />
                </div>


                
                <Sidebar />
            </div>
        )
    }
}

export default LatestArticles