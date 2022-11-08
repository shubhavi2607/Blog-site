import { Component } from "react";
import clapsIcon from '../../../assets/icons/clapping.png'

class Claps extends Component{
    state = {
        claps: this.props.claps
    }
    render(){
        const clapsinDecimal=(claps)=>{
            if(claps>999){
                return claps/1000+"K"
            }
            return claps
            
        }
        return(
            <div className="claps-container"> 
                <img alt="" className="claps-icon" src={clapsIcon} />
                <div className="claps">
                    <span>{clapsinDecimal(this.state.claps)}</span>
                    {!this.props.noClap?<span>claps</span>:null}
            </div>
        </div>
        )
    }
}

export default Claps