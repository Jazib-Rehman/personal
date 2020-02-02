import AppService from "./../../services/app.service";

import React from "react";
import Meal from "../../components/meal";
import { Link } from "react-router-dom";

class OurFood extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			pdf: [],
			categoriesPreview: [],
			itemIndex: 0
		};
	}

	componentDidMount() {
		AppService.get("categories/get")
			.then(response => {
				this.setState({ categories: response ? response : [] });
			})
			.catch(err => console.error(err));
		AppService.get("pdf/get")
			.then(response => {
				this.setState({ pdf: response ? response : [] });
			})
			.catch(err => console.error(err));

		this.timeout = setInterval(() => {
			let currentIdx = this.state.itemIndex;
			if (currentIdx > this.state.categories.length) {
				this.setState({ itemIndex: 0 });
			} else {
				this.setState({ itemIndex: currentIdx + 4 });
			}
		}, 3500);

	}

	shuffle(arra1) {
		var ctr = arra1.length, temp, index;

		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arra1[ctr];
			arra1[ctr] = arra1[index];
			arra1[index] = temp;
		}
		return arra1;
	}

	categories() {
		this.shuffle(this.state.categories)
		if (this.state.categories !== []) {
			return this.state.categories.map((item, i) => {
				if (i < 4) {
					return (
						<div className="py-2 px-3" key={i}>
							<Link to={"/menu"} style={{ textDecoration: 'none' }}>
								<div className="catCard">
									<div className="bg-orange py-2 text-white no-underline trans-all">
										<p className="text-sm md:text-lg font-normal uppercase truncate">{item.name}</p>
									</div>
									<img
										src={item.image}
										alt="dummy"
										className="m-auto w-full h-full md:w-64 md:h-64 object-cover"
									/>
								</div>
							</Link>
						</div>
					);
				}
			});
		} else {
			return <p className="text-2xl font-thin">Nothing Found!</p>;
		}
	}

	render() {
		return (
			<section className="m-auto relative w-full text-center py-12 z-40 flex justify-center">
				<div className="w-full">
					<h1 className="flex items-center justify-center font-prim text-dark">
						<span className="text-lg md:text-lg px-4 text-prim">OUR</span>
						<span className="text-2xl md:text-3xl border-l-2 border-orange-400 px-4 text-prim">
							{" "}
							FOOD{" "}
						</span>
					</h1>
					<p className="mt-4 text-gray-500 font-light text-sm">
						Here you will find our full menu</p>
					<div className="my-4">
						<a
							className="btn bg-orange text-xs  md:text-lg text-white rounded-none"
							href="/menu"
						>
							OUR FULL MENU</a>
						{this.state.pdf.map((item, i) => {
							return (
								<a
									className="btn bg-white text-xs md:text-lg text-orange rounded-none"
									href={item.image}
									key={i}
								>
									DOWNLOAD PDF</a>
							);
						})}
					</div>
					<div className="w-full">
						<div className="md:flex justify-center mt-4 z-40 w-full m-auto items-center">
							{this.categories()}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default OurFood;
