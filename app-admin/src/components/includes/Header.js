import React from 'react';

class Header extends React.Component {

    render() {
        return (
          <header className="main-header">
          <a href="{``}" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
          </a>
          <nav className="navbar navbar-static-top">
          <a href="http://google.com" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
          <li className="dropdown messages-menu">
          <a href="http://google.com" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-envelope-o"></i>
          <span className="label label-success">4</span>
          </a>
          <ul className="dropdown-menu">
          <li className="header">You have 4 messages</li>
          <li>
          <ul className="menu">
          <li>
          <a href="http://google.com">
          <div className="pull-left">
          <img src="public/assets/dist/img/avatar3.png" className="img-circle" alt=""/>
          </div>
          <h4>
          Support Team
          <small><i className="fa fa-clock-o"></i> 5 mins</small>
          </h4>
          <p>Why not buy a new awesome theme?</p>
          </a>
          </li>
          </ul>
          </li>
          </ul>
          </li>
          </ul>
          </div>
          </nav>
          </header>

            
        );
    }
}

export { Header };