import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Link } from 'react-router-dom'

class AppProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            cat_id: '',
            subcat_id: '',
            description: '',
            nutrition: '',
            price: '',
            categories: [],
            message: false,
            successMessage: false,
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
        AppService.getMethode('category')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
    }

    handleChange = (property, event) => {
        const state = this.state;
        state[property] = event.target.value;
        this.setState({ state: state });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" value={this.state[props.name]} name={props.name} onChange={this.handleChange.bind(this, props.property)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    Dropdown(cat) {
        // if (cat == "Category") {
        return (
            <div className="form-group">
                <p className="text-xs font-semibold">Category</p>
                <select value={this.state.cat_id} name="cat_id" onChange={this.onSelectChange} className="w-full p-2-5 border bg-white outline-none font-thin">
                    <option value="none">Select a Category</option>
                    {this.state.categories.map((item, i) => {
                        return (
                            <option value={item.id} key={i}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        )
        // }
        // return (
        // <div className="form-group">
        //     <p className="text-xs font-semibold">Sub Category</p>
        //     <select value={this.state.subcat_id} name="subcat_id" onChange={this.onSelectChange} className="w-full p-2-5 border bg-white outline-none font-thin">
        //         <option value="none">Select a Sub Category</option>
        //         {this.state.sub_categories.map((item, i) => {
        //             return (
        //                 <option value={item.id} key={i}>{item.name}</option>
        //             )
        //         })}
        //     </select>
        // </div>
        // );
    }

    handleClick = () => {
        if (
            this.state.name === '' ||
            this.state.selectedFile === null ||
            this.state.cat_id === '' ||
            this.state.description === '' ||
            this.state.nutrition === '' ||
            this.state.price === ''
        ) {
            this.setState({
                message: true,
                successMessage: false
            })
        } else {

            const data = new FormData()
            data.append('image', this.state.selectedFile)
            data.append('name', this.state.name)
            data.append('cat_id', this.state.cat_id)
            data.append('subcat_id', this.state.subcat_id)
            data.append('description', this.state.description)
            data.append('nutrition', this.state.nutrition)
            data.append('price', this.state.price)

            AppService.axiosPost("upload", data, {
            })
                .then(response => {
                    console.log(response)
                    AppService.getMethode('category')
                        .then(response => {
                            this.setState({
                                categories: response,
                                successMessage: true,
                                message: false,
                                name: '',
                                cat_id: '',
                                subcat_id: '',
                                description: '',
                                nutrition: '',
                                price: '',
                                selectedFile: null
                            })
                            this.state = {
                                name: '',
                                cat_id: '',
                                subcat_id: '',
                                description: '',
                                nutrition: '',
                                price: '',
                                selectedFile: null
                            }
                        })
                        .catch(err => console.error(err));
                    window.location.replace('/admin/tags?id=' + response.id)
                })
                .catch(err => console.error(err));
        }
    }

    selectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
        console.log(event.target.files[0])
    }

    error() {
        if (this.state.message === true) {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Kindly check all fields! (All fields should be filled!)
                </div>
            )
        }
    }

    success() {
        if (this.state.successMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Product Successfully added!
                </div>
            )
        }
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
                                    <p className="text-2xl font-semibold text-gray-700">Add Product</p>
                                </div>
                                {this.error()}
                                {this.success()}
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Name:',
                                            name: 'name',
                                            property: 'name',
                                            placeholder: 'Name!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Nutrition Information:',
                                            name: 'nutrition',
                                            property: 'nutrition',
                                            placeholder: 'Nutrition Info!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Description:</p>
                                        <textarea name="description" value={this.state.description} onChange={this.handleChange.bind(this, 'description')} className="w-full p-2 border bg-white rounded rounded-sm" placeholder="Description!"></textarea>
                                    </div>
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Price:',
                                            name: 'price',
                                            property: 'price',
                                            placeholder: 'Price!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1 border-t border-b">
                                        {/* <div className="radio-btn-container" style={{ display: "flex" }}>
                                            <div className="p-3 mt-3">
                                                <RadioButton
                                                    changed={this.radioChangeHandler}
                                                    id="1"
                                                    isSelected={this.state.catMethod === "Category"}
                                                    label="Category"
                                                    value="Category"
                                                />
                                            </div>
                                            <div className="p-3 mt-3">
                                                <RadioButton
                                                    changed={this.radioChangeHandler}
                                                    id="2"
                                                    isSelected={this.state.catMethod === "Sub Category"}
                                                    label="Sub Category"
                                                    value="Sub Category"
                                                />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="w-1/2 p-1 border-t border-b">
                                        {this.Dropdown(this.state.catMethod)}
                                    </div>
                                    <div className="w-full p-1 border-t border-b">
                                        <input type="file" name="image" onChange={this.selectedFile} />
                                    </div>

                                </div>
                                <div className="w-full flex justify-end p-1 mt-4">
                                    {/* <Link to="/admin/tags"> */}
                                    <input type="button" onClick={this.handleClick} value="Add" className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center" />
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default AppProduct