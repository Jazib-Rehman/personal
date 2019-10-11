import React from 'react'
import Layout from './layout'
import Findus from './menu/findus'
import Footer from './../components/footer'
import ImageBlock from './../components/imageblock'

const Menu = () => (
  <Layout >
    <Findus />
    <ImageBlock />
    <Footer />
  </Layout>
)

export default Menu
