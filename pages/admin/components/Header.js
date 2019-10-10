import React from 'react'
import Head from 'next/head'
import { Bell, User } from 'react-feather'

class Header extends React.Component {

    render() {
        return (
            <nav className='flex w-full p-4 shadow bg-white fixed top-0 z-50'>
                <div className="flex-grow ">Home</div>
                <div className="flex items-center text-gray-600  ">
                    <Bell className="mr-4"/>
                    <User />
                </div>
            </nav>
        )
    }

}

export default Header