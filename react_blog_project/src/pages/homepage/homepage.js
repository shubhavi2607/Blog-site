import { Component } from "react";
import SubHeading from "../../components/subheading";
import ContentJson from './contentjson'
import Spacer from "../../components/spacer";
import FeaturedArticles from "../../components/featuredArticles/featured-articles";
import axios from 'axios'
import './homepage.css'

class Home extends Component {

    constructor(){
        super();
        this.state = {
            subHeadingJson: null
        }
    }

    componentDidMount(){
        axios.get(global.config.base_url()+"/api/subheading").then((response)=>{
            this.setState({
                subHeadingJson: response.data
            })
        })
        .catch((error)=>{
            console.log("Error ", error.message)
        })
    }

    


    render(){
        
        return(
            <div className="homepage">
            
            <FeaturedArticles />
            {!this.state.subHeadingJson? "Loading...." : this.state.subHeadingJson.map(item => (
            <div key={item._id}>
                <Spacer />
                <SubHeading subheading={item.subheading}/>
                <ContentJson subheading={item.subheading} />
                </div>
            ))}
            </div>
        )
    }
}

export default Home