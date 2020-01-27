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
			console.log(this.state.itemIndex)
		}, 3500);

	}

	shuffle(arra1) {
		var ctr = arra1.length, temp, index;

		// While there are elements in the array
		while (ctr > 0) {
			// Pick a random index
			index = Math.floor(Math.random() * ctr);
			// Decrease ctr by 1
			ctr--;
			// And swap the last element with it
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
				return (
					<div className="w-56 h-full md:w-56 p-2 mt-6 trans-1" key={i}>
						<Link to={"/menu"} style={{ textDecoration: 'none' }}>
							<div className="catCard">
								<div className="bg-orange py-1 text-white no-underline trans-all">
									<p className="text-sm md:text-lg font-light">{item.name}</p>
								</div>
								<img
									src={item.image}
									alt="dummy"
									className="m-auto w-56 h-56 md:w-56 object-cover"
								/>
							</div>
						</Link>
					</div>
				);
			});
		} else {
			return <p className="text-2xl font-thin">Nothing Found!</p>;
		}
	}

	render() {
		return (
			<section className="relative text-center py-12 z-40">
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
				<div className="w-full md:px-24">
					<div className="flex horizontal mt-4 z-40 w-full md:w-5/6 m-auto items-center">
						{this.categories()}
					</div>
				</div>
			</section>
		);
	}
}

export default OurFood;
