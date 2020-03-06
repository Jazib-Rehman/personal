import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import OurFood from './ourfood'
import Channels from './channels'
import Store from './store'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'
import AppService from "./../../services/app.service";


import ScrollUpButton from "react-scroll-up-button";
import { CloudLightning } from 'react-feather'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      basics: []
    }
  }

  componentDidMount() {
    AppService.get("basics/get")
      .then(response => {
        this.setState({
          basics: response ? response : []
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Layout className="trans-all" >
        <Banner />
        {this.state.basics.map((item, i) => {
          return <div key={i} style={{ backgroundImage: `url(${item.steckers})` }} className="flex justify-center parallax">
            <div className="w-full">
              <OurFood />
              <Channels />
              <Store />
            </div>

          </div>
        })}
        {this.state.basics.map((item, i) => {
          return <div key={i} style={{ backgroundImage: `url(${item.homeImage})` }} className="parallax"></div>
        })}
        {/* <ImageBlock /> */}
        <ScrollUpButton
          ContainerClassName="p-2 rounded-full" />
        <Footer />
      </Layout >
    )
  }

}


export default Home
