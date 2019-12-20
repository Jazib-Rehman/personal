import React from 'react'
import AdminLayout from './AdminLayout'
import LeftNavbar from './components/LeftNavbar'
import Header from './components/Header'
import Meal from './../../components/meal'
import Card from '../../components/kit/card'

class Admin extends React.Component {

    static getInitialProps(data) {
        return { list: data.query.list }
    }

    render() {
        return (
            <AdminLayout>
                <div className="flex w-screen h-screen">
                    <div className="w-64 h-screen fixed">
                        <LeftNavbar />
                    </div>
                    <div className="w-64 h-screen p-32">
                    </div>
                    <div className="w-full">
                        <Header />
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Admin