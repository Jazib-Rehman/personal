import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'
import Foods from './foods'

const Menu = () => (
	<Layout >
		<Banner />
		<Foods />
		{/* <ImageBlock /> */}
		<Footer />
	</Layout>
)

export default Menu
