import React from 'react';
import './styles/theme.css';
import Menu from './menu';
import About from './about';
import Contact from './contact';
import Career from './career';
import Covid from './covid';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
                <Header />
                <Banner />
                <div className="container">
                <Menu />
                <switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/career" component={Career} />
                    <Route path="/covid" component={Covid} />
                </switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

const Home = () => {

    return (
        <div className="homestyle">
            <div className="row">
                <div className="col-xs-12 col-sm-6"><Career /></div>
                <div className="col-xs-12 col-sm-6"><Contact /></div>
            </div>
        </div>
    )
}
export default App;
