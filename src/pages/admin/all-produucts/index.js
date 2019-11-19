import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavBar'
import Header from './../components/Header'
import Meal from './../../../components/meal'
import Card from '../../../components/kit/card'
import { Layers, PlusCircle, Eye, RefreshCw, Inbox, FileText, MapPin, Coffee, Info } from 'react-feather';

class Home extends React.Component {

    static getInitialProps(data) {
        return { list: data.query.list }
    }

    state = {
        products: []
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = _ => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(({ data }) => {
            console.log(data )
        })
        .catch(err => console.error(err))
    }

    renderProduct = ({ id, name }) => <div key={id}>{name}</div>

    render() {
        return (
            <AdminLayout>
                <div className="flex w-full h-full">
                    <div className="w-64 h-screen fixed">
                        <LeftNavbar />
                    </div>
                    <div className="w-64 h-screen p-32">
                    </div>
                    <div className="w-full">
                        <Header />
                        <div className="pt-24 px-10 pb-10">
                            <div className="bg-white rounded shadow shadow-md py-4 px-8">
                                <div className="text-center py-2 my-2 border-b">
                                    <p className="text-2xl font-semibold text-gray-700">All Product</p>
                                </div>
                                
                                <div className="App">
                                    { products.map(this.renderProduct) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Home