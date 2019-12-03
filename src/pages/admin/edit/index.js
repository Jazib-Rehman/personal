import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import { Info } from 'react-feather';
import AppService from './../../../services/app.service'
import queryString from 'query-string'
import appService from './../../../services/app.service';

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            product: {
                name: '',
                cat_id: '',
                subcat_id: '',
                description: '',
                nutrition: '',
                price: '',
                image: '',
            },
            proIds: [],
            catMethod: "Category",
            selectedFile: null
        }
    }

    radioChangeHandler = (event) => {

        this.setState({
            catMethod: event.target.value
        });
    }

    onChange(property, event) {
        const state = this.state;
        state[property] = event.target.value;
        this.setState({ state: state });
    }


    onSelectChange = event => {
        if (event.target.name === "cat_id") {
            this.setState({
                cat_id: event.target.value,
                subcat_id: ''
            })
        } else if (event.target.name === "subcat_id") {
            this.setState({
                cat_id: '',
                subcat_id: event.target.value
            })
        }
    }


    componentDidMount() {
        const id = queryString.parse(this.props.location.search).id
        AppService.getProductById(id)
            .then(response => {
                const { product, categories } = response
                // debugger;
                this.setState({
                    product,
                    // name: product.name,
                    // nutrition: product.nutrition,
                    categories
                })
                console.log(response[0])
            })
            .catch(err => console.error(err));
        const pros = this.state.categories.map(item => {
            return item.products
        })
        pros.map((item, i) => {
            return item.map(product => {
                this.state.proIds.push({ id: product.id })
            })
        })
        console.log(queryString.parse(this.props.location.search).id);
    }

    handleChange = (property, value) => {
        const { product } = this.state;
        product[property] = value;
        this.setState({ product });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} value={this.state.product[props.property]} onChange={({ target }) => this.handleChange(props.property, target.value)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    Dropdown(cat) {
        // if (cat == "Category") {
        return (
            <div className="form-group">
                <p className="text-xs font-semibold">Category</p>
                <select value={this.state.product.cat_id} name="cat_id" onChange={({ target }) => this.handleChange("cat_id", target.value)} className="w-full p-2-5 border bg-white outline-none font-thin">
                    {/* <option value={this.state.product.cat_id}>Select a Category</option> */}
                    {this.state.categories.map((item, i) => {
                        return (
                            <option value={item.id} key={i}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }

    handleClick = () => {
        const data = new FormData()
        const { id, name, description, cat_id, subcat_id, nutrition, price, image } = this.state.product;
        data.append('id', id)
        data.append('image', this.state.selectedFile)
        data.append('name', name)
        data.append('cat_id', cat_id)
        data.append('subcat_id', subcat_id)
        data.append('description', description)
        data.append('nutrition', nutrition)
        data.append('price', price)
        data.append('img', image)

        AppService.axiosPost("update-product", data, {
        })
            .then(response => {
                window.location.reload();
            })
            .catch(err => console.error(err));
    }

    selectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
        console.log(event.target.files[0])
    }

    formUI() {
        const { name, nutrition, cat_id, description, price, image } = this.state.product

        return (
            <div>
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-1">
                        {this.LabelInput({
                            label: 'Name:',
                            name: 'name',
                            property: 'name',
                            value: name,
                            placeholder: 'Name!'
                        })}
                    </div>
                    <div className="w-1/2 p-1">
                        {this.LabelInput({
                            label: 'Nutrition Information:',
                            name: 'nutrition',
                            property: 'nutrition',
                            value: nutrition,
                            placeholder: 'Nutrition Info!'
                        })}
                    </div>
                    <div className="w-1/2 p-1">
                        <p className="text-xs font-semibold">Description:</p>
                        <textarea name="description" value={description} onChange={({ target }) => this.handleChange('description', target.value)} className="w-full p-2 border bg-white rounded rounded-sm" placeholder="Description!"></textarea>
                    </div>
                    <div className="w-1/2 p-1">
                        {this.LabelInput({
                            label: 'Price:',
                            name: 'price',
                            property: 'price',
                            value: price,
                            placeholder: 'Price!'
                        })}
                    </div>
                    <div className="w-1/2 p-1 border-t border-b">
                    </div>
                    <div className="w-1/2 p-1 border-t border-b">
                        {this.Dropdown(this.state.catMethod)}
                    </div>
                    <div className="w-full p-1 border-t border-b">
                        <input type="file" name="image" onChange={this.selectedFile} />
                    </div>

                </div>
                <div className="w-full flex justify-end p-1 mt-4">
                    <input type="button" onClick={this.handleClick} value="Update" className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center" />
                </div>
            </div>
        )
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
                                    <p className="text-2xl font-semibold text-gray-700">Edit Product</p>
                                </div>

                                {this.formUI()}
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Edit