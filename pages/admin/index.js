import React from 'react'
import AdminLayout from './AdminLayout'
import LeftNavbar from './components/LeftNavBar'
import Header from './components/Header'

class Home extends React.Component {

    render() {
        return (
            <AdminLayout>
                <div className="flex w-screen h-screen">
                    <div className="w-1/6 h-screen">
                        <LeftNavbar />
                    </div>
                    <div className="w-3/6">
                        <Header />
                        {this.props.children}
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Home