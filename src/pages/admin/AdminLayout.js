import React from 'react'
// import Head from 'next/head'

class AdminLayout extends React.Component {


    render() {
        return (
            <html>
                <head>
                    <title>Admin</title>
                    <link rel='icon' href='/static/favicon.ico' />
                    <script src="https://unpkg.com/feather-icons"></script>
                    <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,700&display=swap" rel="stylesheet" />
                    <link href="/static/tailwind.css" rel="stylesheet" />
                    <link rel='stylesheet' href='/static/admin.css' />
                </head>
                <body className="bg-indigo-100">
                    {this.props.children}
                </body>
            </html>
        )
    }

}

export default AdminLayout