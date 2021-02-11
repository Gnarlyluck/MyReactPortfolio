import React, {useState, useEffect} from 'react'
import{Switch, Route} from 'react-router-dom'
import Nav from '../components/Nav'
import HomePage from '../pages/Home'

export default function Router(props) {
    console.log(props)
    return(
    <div className='body'>
        <Nav {...props}/>

        <div>
            <Switch>
                <Route
                    exact path ='/'
                    component={(props) => (
                        <HomePage 
                        {...props}
                        />
                    )}
                />
            </Switch>
        </div>
    </div>

    )

}