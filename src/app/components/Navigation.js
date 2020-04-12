import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';


const Navigation = () => (
    <div className="navigation">
        <Link to="/">
            <h1>Home Page</h1>
        </Link>
        <Link to="/dashboard">
            <h1>
                Dashboard
            </h1>
        </Link>
       
    </div>
);

export const ConnectedNavigation = connect(state=>state) (Navigation);