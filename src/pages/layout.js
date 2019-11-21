import React from 'react'
// import Head from 'next/head'
import Header from '../components/header'

class Layout extends React.Component {

    render() {
        return (
            <main>
                <head>
                    <title>Home</title>
                    <link rel='icon' href='/static/favicon.ico' />
                    <link rel='stylesheet' href='/static/style.css' />
                    <link href="/static/tailwind.css" rel="stylesheet" />
                </head>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </main>
        )
    }

}

export default Layout