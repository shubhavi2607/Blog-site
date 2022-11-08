import { Component } from "react"
import MetaDisplay from "../meta-display"
import PostLink from "../post-link"

class TopPostsRender extends Component {

    state = {
        className: "top-posts",
        dividerClass: "divider",
    }

    

    componentDidMount(){

        if(this.props.index === 0){
            let className = this.state.className
            this.setState({
                className: className.concat(" column"),
                dividerClass: "divider hide"
            })
        }
    }

    

    

    render() {
        
        return(
            <>
            <hr className={this.state.dividerClass} />
            <div className={this.state.className}>
                    <img alt="" src={this.props.data["featured-img"]}></img>
                    <div className="content-container">
                        <div>
                        <h2><PostLink post_id={this.props.data._id} title={this.props.data.title} /></h2>
                            <MetaDisplay meta={this.props.data} />
                        </div>
                        <p className="index">{this.props.index+1}</p>
                    </div>           
                     
            </div>
            
            </>
        )
    }
    
}

export default TopPostsRender