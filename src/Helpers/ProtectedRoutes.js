import React from "react";
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            props => localStorage.getItem('authToken') ? <Component {...rest} {...props} /> : <Redirect to='/' />
        }
        />
    )
}