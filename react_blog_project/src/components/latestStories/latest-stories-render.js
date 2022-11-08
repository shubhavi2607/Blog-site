import { Component } from "react";
import MetaDisplay from "../meta-display";
import PostLink from "../post-link";

class LatestStoriesRender extends Component {

    state = {
        dividerClass: "divider vertical"
    }

    componentDidMount(){
        if(this.props.index === 0){
            this.setState({
                dividerClass: "divider vertical hide"
            })
        }
    }

    render() {

        return(
            <div className="latest-stories">
                <hr className={this.state.dividerClass} />
                <div className="card-content">
                    <h2><PostLink post_id={this.props.data._id} title={this.props.data.title} /></h2>
                    <p className="description">{this.props.data.content}</p>
                    <MetaDisplay meta={this.props.data} />
                </div>
                
            </div>
            
        )
    }
}

export default LatestStoriesRender;