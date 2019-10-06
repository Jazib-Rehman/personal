import React from 'react'
import Head from 'next/head'

class AdminLayout extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className="bg-indigo-100">
                <Head>
                    <title>Admin</title>
                    <link rel='icon' href='/static/favicon.ico' />
                    <link rel='stylesheet' href='/static/style.css' />
                    <link href="/static/tailwind.css" rel="stylesheet" />
                    <script src="https://unpkg.com/feather-icons"></script>
                </Head>
                <div>
                    {this.props.children}
                </div>
            </main>
        )
    }

}

export default AdminLayout