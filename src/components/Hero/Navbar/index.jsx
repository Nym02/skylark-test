import React from 'react'
import logo from "./../../../assets/img/logo.svg"

const Navbar = () => {
    const nav1 = [
        {
            id: 1,
            item: "who we are"
        },
        {
            id: 2,
            item: "what we do"
        },
        {
            id: 3,
            item: "sectors"
        },
        {
            id: 4,
            item: "transactions"
        },
    ]
    const nav2 = [
        {
            id: 1,
            item: "our people"
        },
        {
            id: 2,
            item: "global reach"
        },
        {
            id: 3,
            item: "newsletter"
        },
        {
            id: 4,
            item: "contact us"
        },
    ]
  return (
    <>
        <nav className='skylark-navbar'>
            <ul className="skylark-navbar-items">
                {
                    nav1 && nav1.map((item) => {
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        return <><li  key={item?.id}className="skylark-navbar-item"><a href="#" className="skylark-navbar-item-link">{item?.item}</a></li></>
                    })
                }
                <li className="skylark-navbar-logo"><img src={logo} alt="" /></li>
                {
                    nav2 && nav2.map((item) => {
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        return <><li  key={item?.id}className="skylark-navbar-item"><a href="#" className="skylark-navbar-item-link">{item?.item}</a></li></>
                    })
                }
                
            </ul>
        </nav>
    </>
  )
}

export default Navbar