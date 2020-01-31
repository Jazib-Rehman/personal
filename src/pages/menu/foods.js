import AppService from "./../../services/app.service";

import React from "react";
import Category from "../../components/category.js";
import Meal from "../../components/meal";

class Foods extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			basics: [],
			unsigned: []
		};
	}

	componentWillMount() {
		AppService.get("all/get")
			.then(response => {
				this.setState({ categories: response ? response : [] });
			})
			.catch(err => console.error(err));

		AppService.get("unsign-products/get")
			.then(response => {
				this.setState({ unsigned: response ? response : [] });
			})
			.catch(err => console.error(err));

		AppService.get("basics/get")
			.then(response => {
				this.setState({
					basics: response ? response : []
				});
			})
			.catch(err => console.error(err));

	}

	handleScroll(id) {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest"
		});
	}

	get categories() {
		if (this.state.categories) {
			return this.state.categories;
		} else {
			return [];
		}
	}

	get unasigned() {
		if (this.state.unsigned) {
			return this.state.unsigned;
		} else {
			return [];
		}
	}

	render() {
		{
			return this.state.basics.map((item, i) => {
				return (
					<section key={i} style={{ backgroundImage: `url(${item.steckers})` }} className="relative text-center py-12 -mb-32 bg-none parallax">



						<h1 className="flex items-center justify-center font-prim text-dark">
							<span className="text-lg px-2 text-prim">OUR</span>
							<span className="text-3xl border-l-2 border-orange-400 px-2 text-prim">
								{" "}
								FOOD{" "}
							</span>
						</h1>
						<p className="mt-4 text-gray-500 font-light text-sm">
							Here you will find our full menu</p>

						<div className="flex justify-center">
							<div className="flex flex-wrap w-full md:w-2/3 font-sec justify-center cursor-pointer py-4">
								{this.state.categories.map((menu, i) => (
									<div
										key={i}
										className="hover:text-white focus:bg-orange-600 text-lg"
									>
										<a
											className="inline-block btn bg-dark-trans rounded-none"
											onClick={this.handleScroll.bind(this, menu.id)}
										>
											{menu.name}
										</a>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-wrap mt-8 m-auto w-full md:w-2/3">
							{this.unasigned.map((item, j) => (
								<Meal meal={item} key={j} />
							))}
						</div>
						{this.categories.map((category, i) => {
							return (
								<div id={category.id} key={i} className="mt-5">
									<Category category={category} key={category.id} />
								</div>
							);
						})}
					</section>
				);
			})
		}
	}
}

export default Foods;
