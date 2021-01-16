import React, { Component } from 'react';

import './css/bootstrap.min.css';
import './css/style.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Links from './links';
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header /> 
        <Links /> 
        <Content/>
        <Footer />
        </React.Fragment>
        
    );
  }
}
export default App;
