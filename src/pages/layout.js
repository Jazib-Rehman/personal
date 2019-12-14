import React from 'react'
import Header from '../components/header'

class Layout extends React.Component {

    render() {
        return (
            <html>
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
            </html>
        )
    }

}

export default Layout