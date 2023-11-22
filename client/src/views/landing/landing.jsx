import React from "react";
import { Link } from 'react-router-dom'
import './landing.css'

export default function Landing () {
    return(
        <>
            <div className="landing-styles-container">
                <h1>Esta es la landing Page</h1>
                <Link to={'/home'}>
                    <button>Home</button>
                </Link>
                <Link to={'/detail'}>
                    <button>Detail</button>
                </Link>
                <Link to={'/form'}>
                    <button>Form</button>
                </Link>
            </div>
        </>
    )
}