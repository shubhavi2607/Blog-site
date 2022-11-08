import { Component } from "react";
import './tags.css'
class TagRender extends Component{
    state = {
        tags: this.props.tags
    }
    render(){
        return(
            <div className="tags-container">
                {this.state.tags.map((item, index)=>{
                    return(
                    <div key={index} className="tag">
                        <span>{item}</span>
                    </div>)
                })}
            </div>
        )
    }
}

export default TagRender