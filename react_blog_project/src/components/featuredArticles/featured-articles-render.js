import { Component } from "react"
import { Link } from "react-router-dom";
import MetaDisplay from "../meta-display";


class FeaturedArticlesRender extends Component {

    state = {
        className: "",
        hovered: null
    }

   imgStyle = {
        filter: "brightness(70%) contrast(90%)"
        
   }

   constructor(props){
       super(props);
       
       if(this.props.stateIsBig){
           this.state={
               className: "big-image"
           }
       }
       else {
            this.state = {
                className: "small-image"
            }
        }

   }


    // componentDidMount() {
    //     if(this.props.article.type === "small-image") {
    //         this.setState({
    //             className: "row-image-container"
    //         })
    //     }
        
    // }

   mouseEnter=(e)=>{
       
       this.setState({
        prevStyle: this.imgStyle
    })
       this.imgStyle = {
           ...this.imgStyle,
           filter: "brightness(40%) contrast(90%)",
           
           transform: "scale(1.04)"
       }
       
   }

   mouseLeave=()=>{
    console.log("Leave")
    this.imgStyle = this.state.prevStyle
    this.setState({
        prevStyle: ""
    })
    }

    
    render() {
        return(
            <>
            {this.props.data.map(value=>{
                return (
                <Link key={value._id} className="post-link" to={{
                        pathname: '/category/post',
                        search: "id="+value._id
                        }}>
                <div  className={this.state.className}>
                <img className="featured" alt="" src={value['featured-img']}></img>
                <span className="text-container">
                    <div className="title">
                    {value.title}
                    </div>
                                            
                    <MetaDisplay meta={value} />
                    <hr className="text-divider" />

                     
                                            
                </span>
                <div className="nav_dots">
                        <span className="dots"></span>
                        <span className="dots"></span>
                        <span className="dots"></span>
                        <span className="dots"></span>
                    </div>
            </div>
            </Link>
                )
            })}
            
            </>
        )
    }
    
}

export default FeaturedArticlesRender