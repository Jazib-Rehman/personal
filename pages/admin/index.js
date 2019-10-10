import React from 'react'
import AdminLayout from './AdminLayout'
import LeftNavbar from './components/LeftNavBar'
import Header from './components/Header'
import Meal from './../../components/meal'

class Home extends React.Component {

    static getInitialProps(data) {
        console.log(data)
        return { list: data.query.list }
    }

    render() {
        return (
            <AdminLayout>
                <div className="flex w-screen h-screen">
                    <div className="w-64 h-screen">
                        <LeftNavbar />
                    </div>
                    <div className="w-full">
                        <Header />
                        <div className="flex flex-wrap p-4">
                            {
                                this.props.list.map((item, i) => {
                                    return (
                                        <div key={i} className="p-2">
                                            <Meal item={item} />
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Home