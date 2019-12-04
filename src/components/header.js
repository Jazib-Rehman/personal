import React from 'react'
import AppService from './../services/app.service'

import counterpart from 'counterpart'
import Translate from 'react-translate-component'
import en from '../lang/en'
import ar from '../lang/ar'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ar', ar);

counterpart.setLocale('en');

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			basics: []
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

	state = {
		lang: en
	}

	onLangChange = (e) => {
		this.setState({ lang: e.target.value })
		counterpart.setLocale(e.target.value);
	}

	render() {
		return (
			<header className="bg-prim font-prim text-white text-sm flex fixed w-full py-8 cursor-pointer items-center z-50">
				{/* <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
        <Translate content="title" component="h1" /> */}

				<div className="flex-1 px-2">
					<span className="px-2 border-r">عربي</span>
					{/* <Translate content="copy.p1" component="p" /> */}
					{
						this.state.basics.map((item, i) => {
							return <span className="px-2">{item.site_header}</span>
						})
					}
				</div>
				<div className="flex-1 flex justify-center">
					{
						this.state.basics.map((item, i) => {
							return <a href="/">
								<img src={item.logo} alt="logo" className=" h-10" />
							</a>
						})
					}
				</div>
				<div className="menu flex-1 flex justify-end">
					<a href="/" className="text-xs px-1 hover:text-white hover:no-underline">HOME</a>
					<a href="/menu" className="text-xs px-1 hover:text-white hover:no-underline">OUR FOOD</a>
					<a href="/find-us" className="text-xs px-1 hover:text-white hover:no-underline">FIND US</a>
					<a href="/about-us" className="text-xs px-1 hover:text-white hover:no-underline">ABOUT US</a>
					<a href="/contact-us" className="text-xs px-1 hover:text-white hover:no-underline">CONTACT US</a>
				</div>
			</header>
		)
	}

}

export default Header