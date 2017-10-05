import React, { Component } from 'react';

// CSS
import 'semantic-ui-css/semantic.min.css';
import './layout.css';

// Components
import { Title } from './Title/Title';
import { Footer } from './Footer/Footer';
import { Representation} from './Representation/Representation';

/**
 * The Layout class is the page and acts as a wrapper for
 * all the other components
 */
class Layout extends Component {

    render() {
        return (
            <div className="layout">
                <Title />
                <Representation />
                <Footer />
            </div>
        );
    }
}

export default Layout;