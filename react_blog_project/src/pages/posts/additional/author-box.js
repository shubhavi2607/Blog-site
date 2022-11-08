import { Component } from "react";
import './author-box.css'

class AuthorBox extends Component {

    
    state = {
        data: this.props.info,
        className: "author-box-container",
        socialClass: "social-icons",
        writtenBy: "written-by disable"
    }


    componentDidMount(){
        if(this.props.bottom){
            var value=this.state.className
            this.setState({
                className: value.concat(" bottom"),
                socialClass: "social-icons disable",
                writtenBy: "written-by"
            })
        }
    }
    getDateforDisplay() {
        var dateTime = new Date(this.state.data.date)
        var month = dateTime.toLocaleDateString('default', { month: 'short' })
        var date = dateTime.getDate()
        var year = dateTime.getFullYear()
        return month+" "+date+", "+year
    }
    render(){
        
        return(
            <div className={this.state.className}>
                <div className="author-box">
                    <img alt="" src={this.state.data['author-img']} />
                    <div className="post-meta-container">
                        <p className={this.state.writtenBy}>Written By</p>
                        <h6>{this.state.data['author-name']}</h6>
                        <p className="date">
                            <span>{this.getDateforDisplay()}</span> 
                            <span>&middot;</span>
                            <span>{this.state.data.readtime} read</span>
                        </p>
                    </div>
                </div>
                    <div className={this.state.socialClass}>   
                            <span className="fab fa-facebook"></span>
                            <span className="fab fa-twitter"></span>
                            <span className="fab fa-instagram"></span>
                            <span className="fab fa-youtube"></span>
                            
                    </div>
            </div>
        )
    }
}

export default AuthorBox