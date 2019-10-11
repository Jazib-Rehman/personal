import React from 'react'
import Layout from './layout'
import Banner from '../components/banner'
import OurFood from './home/ourfood'
import Channels from './home/channels'
import Store from './home/store'
import Footer from '../components/footer'
import ImageBlock from '../components/imageblock'

import mock from './mock.json'


const meals = mock.meals.map((item) => {
  let meals = item.meals.map((meal) => {
    return {
      ...meal,
      image: `/static/assets/menu/${item.name}/${meal.name}.jpg`,
      isSpicy: meal.tags && meal.tags.toLowerCase().includes('spicy'),
      isNormal: meal.tags && meal.tags.toLowerCase().includes('normal'),
      isHomos: meal.tags && meal.tags.toLowerCase().includes('homos'),
      isTahina: meal.tags && meal.tags.toLowerCase().includes('tahina'),
      tags: meal.tags ? meal.tags.split(',') : []
    }
  });
  return {
    ...item,
    meals,
  }
});

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      meals
    }
  }


  render() {
    return (
      <Layout >
        <Banner />
        <OurFood meals={this.state.meals} />
        <Channels />
        <Store />
        <ImageBlock />
        <Footer />
      </Layout>
    )
  }

}


export default Home
