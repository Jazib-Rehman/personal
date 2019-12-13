import React from 'react'
import AppService from './../services/app.service'

import counterpart from 'counterpart'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			basics: [],
			showMenu: false
		}
	}

	componentDidMount() {
		AppService.get('basics')
			.then(response => {
				this.setState({
					basics: response
				})
			})
			.catch(err => console.error(err));
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false)
	}

	handleClick = (e) => {
		if (!this.node.contains(e.target)) {
			this.setState({
				showMenu: false
			})
		}
	}

	onLangChange = (e) => {
		this.setState({ lang: e.target.value })
		counterpart.setLocale(e.target.value);
	}

	handleMenu(menu) {
		this.setState({
			showMenu: !menu
		})
	}

	hiddenMenu() {
		if (this.state.showMenu === true) {
			return <div className="flex justify-center text-center trans-1">
				<ul className="navMenu mt-3">
					<li>
						<Link to="/">
							<p className="text-xs px-3 hover:text-white hover:no-underline">HOME</p>
						</Link>
					</li>
					<li>
						<Link to="/menu">
							<p className="text-xs px-3 hover:text-white hover:no-underline">OUR FOOD</p>
						</Link>
					</li>
					<li>
						<Link to="/find-us">
							<p className="text-xs px-3 hover:text-white hover:no-underline">FIND US</p>
						</Link>
					</li>
					<li>
						<Link to="/contact-us">
							<p className="text-xs px-3 hover:text-white hover:no-underline">CONTACT US</p>
						</Link>
					</li>
					<li>
						<Link to="/about-us">
							<p className="text-xs px-3 hover:text-white hover:no-underline">About Us</p>
						</Link>
					</li>
				</ul>
			</div>
		}
	}

	render() {
		return (
			<div>

				<header className="header hidden md:flex bg-trans font-prim text-white text-sm flex items-center fixed w-full py-2 cursor-pointer items-center z-60">
					<div className="w-1/3 px-2">
						<span className="px-2 border-r text-xs">عربي</span>
						{
							this.state.basics.map((item, i) => {
								return <span className="px-2 text-xs" key={i}>{item.site_header}</span>
							})
						}
					</div>
					<div className="w-1/3 flex justify-center">
						{
							this.state.basics.map((item, i) => {
								return <a href="/" key={i}>
									<img src={item.logo} alt="logo" className="h-20" />
								</a>
							})
						}
					</div>
					<div className="menu w-1/3 flex justify-end">
						<Link to="/">
							<p className="text-xs px-3 hover:text-white hover:no-underline">HOME</p>
						</Link>
						<Link to="/menu">
							<p className="text-xs px-3 hover:text-white hover:no-underline">OUR FOOD</p>
						</Link>
						<Link to="/find-us">
							<p className="text-xs px-3 hover:text-white hover:no-underline">FIND US</p>
						</Link>
						<Link to="/contact-us">
							<p className="text-xs px-3 hover:text-white hover:no-underline">CONTACT US</p>
						</Link>
					</div>
				</header>

				<header ref={node => this.node = node} className="md:hidden navHeader bg-trans font-prim text-white text-sm items-center fixed w-full py-2 cursor-pointer items-center z-60">
					<div className=" flex items-center w-full">
						<div className="flex flex-grow justify-start pl-2">
							{
								this.state.basics.map((item, i) => {
									return <a href="/" key={i}>
										<img src={item.logo} alt="logo" className="h-16" />
									</a>
								})
							}
						</div>
						<div className="pr-2" onClick={() => this.handleMenu(this.state.showMenu)}>
							<Menu />
						</div>
					</div>
					{this.hiddenMenu()}
				</header>
			</div>
		)
	}

}

export default Header