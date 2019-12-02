import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import { Eye, Trash, Trash2, Edit } from 'react-feather'
import AppService from './../../../services/app.service'

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            img: ''
        }
    }

    componentDidMount() {
        AppService.get('categories-with-products')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
    }

    onEyeClick = id => {
        window.location.replace("/admin/edit?id=" + id)
    }

    onTrashClick = product => {
        AppService.axiosPost("delete-product", product, {
        })
            .then(response => {
                window.location.reload();
            })
            .catch(err => console.error(err));
    }

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
                                    <p className="text-2xl font-semibold text-gray-700">Products</p>
                                </div>
                                <div className="flex flex-wrap pb-2">
                                    <div className="w-full">
                                        {this.state.categories.map((item, i) => {
                                            return <div className="pb-4 border-b">
                                                <div className="py-2 text-center">
                                                    <p className="text-2xl font-thin">{item.name}</p>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex flex-wrap justify-center items-center">
                                                        {
                                                            item.products.map((meal, i) => {
                                                                return <div href="admin/add-product" className="hover relative overflow-hidden rounded rounded-lg w-40 h-40 flex mx-1 justify-center items-center">
                                                                    {this.state.img = "./../" + meal.image}
                                                                    <img src={this.state.img} className="z-10 w-full h-full absolute" />
                                                                    <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                                    <p className="absolute z-30 text-lg font-thin px-1 text-white">{meal.name}</p>
                                                                    <Edit onClick={this.onEyeClick.bind(this, meal.id)} className="cursor-pointer absolute z-30 h-4 text-white top-0 left-0 mt-1" />
                                                                    <Trash2 onClick={this.onTrashClick.bind(this, meal)} className="cursor-pointer absolute z-30 h-4 text-white top-0 right-0 mt-1" />
                                                                </div>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Products