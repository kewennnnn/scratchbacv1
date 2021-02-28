import React from 'react';
import ReactDOM from 'react-dom';
import menu_icon from './menu_icon.png';
import logo_rect from './logo_rect.png';
import cross_icon from './cross_icon.png';
import './Navbar1.css';
import SigninPopup from './SigninPopup';

class Navbar1 extends React.Component {
  // let popup_background = document.getElementById("popup-background"); 
  // let signin_popup = document.getElementById("signin-popup"); 
  // let sidebar = document.getElementById("sidebar"); 
  // let menu_button = document.getElementById("nav-menu-icon")

  signup() {
    alert("signing up"); // may use router or href instead of onClick
  }

  state = {
    seen: false
  };

  togglePopup = () => {
    alert("signing in");
    this.setState({
      seen: !this.state.seen
    });
    // if (document.getElementById("popup-background").style.display!=null && document.getElementById("signin-popup").style.display!=null) {
    //   //popup_background.style.display = "block";
    //   popup_background.style = blockify; 
    //   signin_popup.style.display = "block";
    //   menu_button.style.zIndex = "0"
    // } 
  }
  
  // exit_popup() {
  //   popup_background.style.display = "none"; 
  //   signin_popup.style.display = "none"; 
  //   sidebar.style.display = "none"; 
  //   menu_button.style.zIndex = "10"
  // } 

  // toggle_sidebar() { 
  //   if (sidebar.style.display == "block") {
  //     popup_background.style.display = "none"; 
  //     sidebar.style.display = "none"; 
  //     menu_button.style.zIndex = "0"
  //   } else {
  //     popup_background.style.display = "block"; 
  //     sidebar.style.display = "block"; 
  //     menu_button.style.zIndex = "10"
  //   }
  // }
  
  render() {
  return (
    <div className="Navbar1">
      <div class="navbar"> 
        <img id="nav-menu-icon" src={menu_icon} class="navbar-icons" /*onClick={toggle_sidebar}*/ />
        <img id="nav-logo" src={logo_rect} class="navbar-icons"/> 
        <p id="nav-brand" class="navbar-icons dropshadow">Scratchbac</p>
        <button id="signup-button" onClick={this.signup} class="navbar-buttons dropshadow"> Sign up</button>
        <button id="signin-button" onClick={this.togglePopup} class="navbar-buttons dropshadow"> Sign in</button>
        <form> 
          <input type="text" id="nav-searchbar" name="search" placeholder="Search Scratchbac" class="dropshadow"/>
        </form>
        {/* <div id="popup-background" style={displayed ? blockify : unblockify} onClick={exit_popup}> </div>
        <div id="signin-popup" style={{display:"none"}} class="dropshadow">
          <img id="popup-cross-icon" src={cross_icon} onClick={exit_popup} class="navbar-icons dropshadow"/>
          <p> Sign in to Scratchbac </p>
          <form> 
            <p class="popup-contents"> Username / Email / Mobile Number </p>
            <input type="text" id="signin-creds" name="creds" placeholder="Username" class="text-fields dropshadow"/>
            <p class="popup-contents"> Password <a href="#" id="forgot-password"> Forgot Password? </a></p>
            <input type="text" id="signin-password" name="password" placeholder="Password" class="text-fields dropshadow"/>
          </form>
          <button id="signin-popup-button" class="navbar-buttons dropshadow"> Sign in </button>
        </div> */}
        <div> {this.state.seen ?  <SigninPopup toggle={this.togglePopup} />  : null } </div>
      </div> 
      <div id="sidebar" style={{display:"none",}}> 
        <div id="sidebar-content" class="dropshadow"> 
        <a href="#" class="sidebar-items"> Home  </a> 
        <hr/> 
        <a href="#" class="sidebar-items"> Browse Posts </a>
        <hr/> 
        <a href="#" class="sidebar-items"> Latest News </a> 
        <hr/> 
        <a href="#" class="sidebar-items"> About Scratchbac </a>
        <hr/>
        <a href="#" class="sidebar-items"> Sponsors </a>
        </div>
      </div>
    </div>
    


  );
  }
}


export default Navbar1;
