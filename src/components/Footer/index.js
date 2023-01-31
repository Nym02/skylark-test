import React from 'react'
import Button from '../Button'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <>
    <div className='skylark-footer-items-wrapper'>
        <div className="skylark-footer-item">
        <ul className="skylark-footer-items">
            <li><a href="#">about</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">how can we help</a></li>

            <li><a href="#">sector expertise</a></li>
            <li><a href="#">deals</a></li>
            <li><a href="#">news & insights</a></li>
        
            <li><a href="#">careers</a></li>
            <li><a href="#">contact</a></li>
            <li><Button text="subscribe to our news" className={"btn-primary"} /></li>
        </ul>
        </div>
    </div>
    <Copyright />
    </>
  )
}

export default Footer