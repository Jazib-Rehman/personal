import React from 'react'
import AdminLayout from './AdminLayout'
import LeftNavbar from './components/LeftNavBar'
import Header from './components/Header'
import Meal from './../../components/meal'
import Card from '../../components/kit/card'

class Home extends React.Component {

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
                        <div className="flex flex-wrap p-4 mt-16">
                            {this.props.list.map((meal, i) => <Meal meal={meal} key={i} />)}
                        </div>

                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Home