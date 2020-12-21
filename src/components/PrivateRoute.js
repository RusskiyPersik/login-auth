import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...left }) {
    const { currentUser } = useAuth()
    
    return (
            <Route
                {...left}
                render={props => {
                   return currentUser ? <Component {...props} /> : <Redirect to='/login' />
                   }}
            ></Route>
    )
}
