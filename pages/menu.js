import React from 'react'
import Layout from './layout'
import Banner from '../components/banner'
import Footer from '../components/footer'
import ImageBlock from '../components/imageblock'
import Foods from './menu/foods'

const Menu = () => (
  <Layout >
    <Banner />
    <div className="fixed top-100 left-0 w-screen overflow-hidden z-10 bages">
        <div className="flex w-full px-24">
          <div className="r-1">
            <img src="static/assets/b10.png" className="w-48 mt-8 inline-block" alt="badge" />
            <img src="static/assets/b4.png" className="w-48 mt-8 inline-block" alt="badge" />
          </div>
          <div className="flex-grow">.</div>
          <div className="r-2">
            <img src="static/assets/b12.png" className="w-64 mt-8 inline-block" alt="badge" />
            <img src="static/assets/b6.png" className="w-48 mt-8 inline-block" alt="badge" />
          </div>
        </div>
      </div>
    <Foods />
    <ImageBlock />
    <Footer />
  </Layout>
)

export default Menu
