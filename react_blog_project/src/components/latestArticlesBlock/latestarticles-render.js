import { Component } from "react";
import MetaDisplay from "../meta-display";
import PostLink from "../post-link";

class LatestArticlesRender extends Component{

    state = {
        item: this.props.data,
        isBig: this.props.stateisBig,
        class: "content small",
        dividerClass: "divider",
        dividerHide: false
        
    }

    componentDidMount() {
        if(this.state.isBig){
            this.setState({
                class: "content"
            })
        }

        if(this.props.dividerHide){
            this.setState({
                dividerClass: "divider hide"
            })
        }
        
    }
    render() {
        

        
        return(
            
            <>
            <hr className={this.state.dividerClass}></hr>
                        <div className={this.state.class}>
                            <img alt="" src={this.state.item["featured-img"]}></img>
                            <div className="card-content">
                            <h2><PostLink post_id={this.state.item._id} title={this.state.item.title} /></h2>
                                
                                <p className="description">{this.state.item.excerpt}</p>
                                <MetaDisplay meta={this.state.item} />
                            </div>
                            
                        </div>
        </>
        )
    }
}

export default LatestArticlesRender