import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './About'
import Images from './Images'

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <Link to = {'/#'}>The Atlanta Website</Link>
		    </div>
		    <ul className="nav navbar-nav">
			    <div>
			    	<Link to={'/'}>Home</Link>
			    	<Link to={'/one'}>About</Link>
			    	<Link to={'/two'}>Atlanta Weather</Link>
			    	<Link to={'/three'}>Images</Link>
			    	<Link to={'/four'}>Mayor Message</Link> 
			    </div> 
			</ul>
			</div>     	
		</nav>    
	)
  }
}

export default BootstrapNavBar


  //   </div>

		  //   	<li><a href="/">Home</a></li>
		  //     	<li><a href="/one">One</a></li>
		  //     	<li><a href="/two">Two</a></li>
		  //     	<li><a href="/three">Three</a></li>
		  //     	<li><a href="/four">Four</a></li>
		  //   </ul>
		  // </div>