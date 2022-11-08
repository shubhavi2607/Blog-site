import { Component } from "react";
import LatestArticles from "../../components/latestArticlesBlock/latestarticles";
import LatestStories from "../../components/latestStories/latest-stories";
import TheLatest from "../../components/thelatest";



class ContentJson extends Component {

    state = {
        subheading: this.props.subheading
    }

    
    
    
    render() {
    

        
        switch(this.state.subheading){
            case 'The Latest': 
            return <TheLatest />
            case 'Latest Articles': return <LatestArticles />;
            case 'Latest Stories': return <LatestStories />;
            default: return null;
        }
    }
}

export default ContentJson
