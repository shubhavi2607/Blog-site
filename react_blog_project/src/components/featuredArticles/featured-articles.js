import '../styles/featured-articles.css'
import { Component } from 'react';
import FeaturedArticlesRender from './featured-articles-render';
import axios from 'axios';

class FeaturedArticles extends Component {
    

    constructor(){
        super();
        this.state = {
            dataForBigImage: null,
            dataForSmallImage: null,
            dataOK: false
        }
        
    }

    componentDidMount(){
        var bigImage = []
        var smallImage = []
        axios.get(global.config.base_url()+"/api/homepage/featured").then((response)=>{
                if(response.data.length){
                    
                    response.data.map((value, index)=>{
                        
                        if(index===0){
                            bigImage.push(value)
                        }
                        else {
                            smallImage.push(value)
                        }
                        return null
                    })
                    this.setState({
                        dataOK: true,
                        dataForBigImage: bigImage,
                        dataForSmallImage: smallImage
                    })
                }
            })
            .catch(error =>{
                console.log("Error ",error.messsage)
        })
        
        
        
    }

    
    render() {
        
        return(
            <>
                <div className="component-container">
                    {this.state.dataOK?(
                        <>
                        <div className="big-image-container">
                            <FeaturedArticlesRender data={this.state.dataForBigImage} stateIsBig={true} />
                        </div>
                        <div className="small-image-container">
                            <FeaturedArticlesRender data={this.state.dataForSmallImage} stateisBig={false}/>
                        </div>
                        </>)
                        :"Loading..."
                    }
                </div>
                
                
            </>
        )
    }
    }   
    

export default FeaturedArticles;
