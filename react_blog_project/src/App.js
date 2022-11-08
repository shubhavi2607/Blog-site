import { Component } from "react";
import Header from './components/header'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import './App.css'
import Home from "./pages/homepage/homepage";
import PageNotFound from "./pages/page-not-found";
import Category from "./pages/categories/category";
import CategoryTopic from "./pages/categories/category-topic";
import Posts from "./pages/posts/posts";
import './config'



class App extends Component {


  state = {
    className: "App"
  }


  render() {

    
    // eslint-disable-next-line
    String.prototype.capitalize = function(){
      return this.charAt(0).toUpperCase()+this.slice(1)
  }

  

  
  
    return(
      <div className = {this.state.className}>
         <BrowserRouter>
        
        <Header />

        <Switch>
          <Route path="/category/post" component={Posts} />
          <Route path="/category/:topic" component={CategoryTopic} />
          <Route path="/category" component={Category} />
          <Route path="/" component={Home} exact/>
          <Route component={PageNotFound}/>
        </Switch>
        
      </BrowserRouter>
      </div>

    )
  }

}

export default withRouter(App);