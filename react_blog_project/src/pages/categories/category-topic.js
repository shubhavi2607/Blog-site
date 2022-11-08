import {Component} from "react";
import LatestArticlesRender from "../../components/latestArticlesBlock/latestarticles-render";
import Sidebar from "../../components/sidebar";
import SubHeading from "../../components/subheading";
import PageNotFound from "../page-not-found";
import '../../components/styles/category-page.css'
import axios from "axios";

class CategoryTopic extends Component {
        
        constructor(props) {
            super(props);   
            this.state = {
                topic: this.props.match.params.topic.capitalize(),
                subheading: "",
                categoryData: null,
                toggleNotFound: null,
                loadingStop: false
            }     
        }

        componentDidMount(){
            axios({
                url:global.config.base_url()+'/api/category/',
                method: 'GET',
                params: {
                    type: this.state.topic
                },
            }).then((response)=>{
                if(response.data.length)
                    this.setState({
                        categoryData: response.data,
                        toggleNotFound: false,
                        subheading: this.state.topic.capitalize()
                })
                else 
                    this.setState({
                        toggleNotFound: true,
                        loadingStop: true
                    })  
            })
            .catch((error)=>{
                console.log("Error ", error.message)
            })
        }

        loadingStop(){
            if(this.state.loadingStop)
                return null
            return <p>Loading...</p>
        }
        
        componentDidUpdate(prevProps){
            if(this.props.match.params.topic!==prevProps.match.params.topic){
                window.location.reload()
            }
        }
        render(){
            
            return(
                <div className="categorytopic-container">
                    <div className="categorytopic">
                        <SubHeading subheading={this.state.subheading}/>

                        <div className="category-content">
                        
                            {this.state.categoryData?(
                                <>
                                {this.state.categoryData.map((item, index)=>{
                                    if(index===0){
                                        return <LatestArticlesRender key={index} data={item} stateisBig={false} dividerHide={true}/> 
                                    }
                                    else{
                                    return <LatestArticlesRender key={index} data={item} stateisBig={false}/> 
                                    }
                                })}
                                <div className="load-more">
                                    <span>&darr;</span>
                                     <p>Load More</p>    
                                </div>
                            </>):this.loadingStop()}
                            {this.state.toggleNotFound?(
                                <PageNotFound />
                            ):null}
                        </div>
                    </div>        
                <Sidebar />
                </div>
            )
        }

        
}



export default CategoryTopic