
import './styles/header.css'
import {NavLink, useLocation} from 'react-router-dom'
import './styles/menu-links.css'
import { useEffect, useState} from 'react'
import axios from 'axios'




const Header = () => {

    let [menuResp, setMenuResp] = useState("navigation")
    let [menuData, setMenuData] = useState(null)


    function hideMenu(){
        setMenuResp(menuResp+" hidden")
    }

    function showMenu() {
        let value = menuResp;
        if(value === "navigation"){
            setMenuResp(value+" responsive")
        }
        else if(value === "navigation responsive hidden"){
            setMenuResp("navigation responsive")
        }
        else {
            setMenuResp("navigation")
        }
        
    }


    const handleMenuData = () => {
        
        axios.get(global.config.base_url()+"/api/header/menu").then((response)=>{
            setMenuData(response.data)
        })
        .catch((error)=>{
        console.log("Error ", error.message)
        })
    }

    useEffect(() => {
        handleMenuData()
        
    },[])


    if(useLocation().pathname === '/category/post'){
            return null
    }

    return(
            <div className="header-container">
                <div className="header">
                <div className="logo">
                    <span>
                        <img alt="logo" src="/media/logo.png" />
                    </span>
                </div>
                
                <div className="navigation-container">
                    <div className={menuResp}>
                    {menuData?
                        menuData.map((links, index)=>
                        (<span key={index}>
                        <NavLink  activeClassName="active-link" key={index} to={links.url_alias} onClick={hideMenu} exact>{links.name}</NavLink>
                        <hr className="divider" />
                        </span>
                        )):null
                    }
                    </div>
                    
                    <button className="breadcrumb" onClick={showMenu}>
                    <i className="fa fa-bars"></i>
                    </button>
                </div>
                <hr className="divider"/>
                </div>
                
                
               
            </div>        
        )
    }

    
   



export default Header;