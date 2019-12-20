import React from 'react'
// import Head from 'next/head'
import { Bell, User } from 'react-feather'

class Header extends React.Component {

    render() {
        return (
            <nav className='flex w-full p-4 shadow bg-white fixed top-0 z-50'>
                <div className="flex-grow ">Home</div>
                <div className="flex items-center text-gray-600  ">
                    <button>
                        <Bell size="17" className="mr-3" />
                    </button>
                    <button>
                        <User size="17" />
                    </button>
                </div>
                <div className="w-64 h-full"></div>
            </nav>
        )
    }

}

export default Header