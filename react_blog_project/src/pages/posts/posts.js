import axios from "axios";
import { Component } from "react";
import NavHeader from "../../components/nav-header/nav-header";
import PageNotFound from "../page-not-found";
import PostRender from "./post-render";
import './posts.css'
class Posts extends Component {

    constructor(){
        super();
        this.state = {
            data: null,
            toogleNotFound: true,
            loadingStop: false
        }
    }
    loadingStop(){
        if(this.state.loadingStop)
            return null
        return <p>Loading...</p>
    }
    componentDidMount(){
        axios.get(global.config.base_url()+"/api/category/post"+this.props.location.search).then((response)=>{
            if(response.data.length){
                this.setState({
                    data: response.data[0],
                    toggleNotFound: false,
                })
            }
            else {
                this.setState({
                    toggleNotFound: true,
                    loadingStop: true
                })
            }
            
        })
        .catch((error)=>{
            console.log("Error ", error.message)
        })
    }
    render(){
        
        return(
            <div className="post-max-width">
                <NavHeader />
                {this.state.data? <PostRender data={this.state.data} />: this.loadingStop()
                }
                {this.state.toggleNotFound?(
                    <PageNotFound />
                    ):null}
                
            </div>
        )
    }
}

export default Posts