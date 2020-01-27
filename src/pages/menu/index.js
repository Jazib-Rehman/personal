import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'
import Foods from './foods'

import ScrollUpButton from "react-scroll-up-button";

const Menu = () => (
	<Layout >
		<Banner />
		<Foods />
		<ScrollUpButton
			ContainerClassName="p-2 rounded-full" />
		<Footer />
	</Layout>
)

export default Menu
