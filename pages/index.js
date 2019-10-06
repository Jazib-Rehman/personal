import React from 'react'
import Layout from './layout'
import Banner from '../components/banner'
import OurFood from './home/ourfood'
import Channels from './home/channels'
import Footer from '../components/footer'
import ImageBlock from '../components/imageblock'

const Home = () => (
  <Layout >
    <Banner />
    <OurFood />
    <Channels />
    <ImageBlock />
    <Footer />
  </Layout>
)

export default Home
