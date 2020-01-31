import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'
import Foods from './foods'

import ScrollUpButton from "react-scroll-up-button";
import AppService from "./../../services/app.service";

class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			basics: []
		}
	}

	componentDidMount() {
		AppService.get("basics/get")
			.then(response => {
				this.setState({
					basics: response ? response : []
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<Layout >
				<Banner />
				<Foods />
				<ScrollUpButton
					ContainerClassName="p-2 rounded-full" />
				{this.state.basics.map((item, i) => {
					return <div key={i} style={{ backgroundImage: `url(${item.ourFoodImage})` }} className="parallax">
					</div>
				})}
				<Footer />
			</Layout>
		)
	}
}

export default Menu
