import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../../redux/Actions/countryActions'
import './home.css'

export default function Home () {
    return(
        <>
            <div className="home-styles-container">
                <h1>Esta es la Home Page</h1>
            </div>
        </>
    )
}