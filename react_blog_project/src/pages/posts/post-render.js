import { Component } from "react";
import Spacer from "../../components/spacer";
import TagRender from "./additional/tag-render";
import FooterContent from "./footer/footer-content";
import shareIcon from '../../assets/icons/share.svg'
import avatar from '../../assets/icons/img_avatar.png'
import AuthorBox from "./additional/author-box";
import ReactHtmlParser from 'react-html-parser';
import Claps from "./additional/claps";


class PostRender extends Component{

    state = {
        data: this.props.data,
    }

    

    renderFooter=()=>{
        for(var i=0; i<3;i++){
            <FooterContent />
        }
    }

    render(){
        
        
        return(
            <>
            <div className="post-container">
                <div className="side-content">
                    <Claps claps={this.state.data.claps} noClap={true}/>
                    <span>
                        <img alt="" src={shareIcon} />
                        <p>Share this article</p>
                    </span>
                </div>
                <div className="post">
                    <h3>{this.state.data.title}</h3>
                    <AuthorBox avatar={avatar} info={this.state.data}/>
                    
                    <img alt="" className="featured-image" src={this.state.data['featured-img']}/>
                    <Spacer spacing={"30px"} />
                    <div className="post-content">
                        <p>{ReactHtmlParser(this.state.data.content)}</p>
                        
                    </div>
                    <TagRender tags={this.state.data.tags}/>
                    <Claps claps={this.state.data.claps} noClap={false} />
                    <hr className="divider"/>
                    <AuthorBox bottom={true} info={this.state.data} />
                    <hr className="divider" />
                    
                </div>
            </div>
            <Spacer spacing={"20px"} />
            <div className="footer-block-container">
                <div className="footer-block">
                    <div className="heading">
                        <h3>More From The Siren</h3>
                        <hr className="divider"/>
                    </div>
                    <FooterContent />
                    <Spacer spacing={"60px"} />
                </div>
                
            </div>
            </>
        )
    }
}

export default PostRender 