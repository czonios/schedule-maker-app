import React, { Component } from 'react';
import './header.css';

export const Header = (props) => {
    return (
        <header>
            <h1>Schedule Maker</h1>
            <p>
                <small>A web application made for students, professionals, parents,
                    anyone who wants to take control of their free time.
                </small>
            </p>
        </header>
    );
}