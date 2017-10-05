import React, { Component } from 'react';
import './layout.css';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Representation} from './Representation/Representation';

class Layout extends Component {

    render() {
        return (
            <div className="layout">
                <Header />
                <Representation />
                <Footer />
            </div>
        );
    }
}

export default Layout;