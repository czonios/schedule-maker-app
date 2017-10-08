import React, { Component } from 'react';

// CSS
import 'semantic-ui-css/semantic.min.css';
import './layout.css';

// Components
import { Title } from './components/Title/Title';
import { Footer } from './components/Footer/Footer';
import Representation from './components/Representation/Representation';

/**
 * The Layout class is the page and acts as a wrapper for
 * all the other components
 */
class Layout extends Component {

    render() {
        const url = this.props
        return (
            <div className="layout">
                <Title />
                <Representation url={url} />
                <Footer />
            </div>
        );
    }
}

export default Layout;