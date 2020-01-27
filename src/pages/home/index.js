import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import OurFood from './ourfood'
import Channels from './channels'
import Store from './store'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'
import { ChevronUp } from 'react-feather'


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.scrollY === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.scrollY - this.props.scrollStepInPx);
  }

  scroll() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  backToTop() {
    // if (window.screenY !== 0) {
    return <button id='scroll' className='scroll fixed text-white bg-sec bottom-0 right-0 mb-6 mr-6 p-3 rounded-full z-60 outline-none'
      onClick={(event) => {
        event.preventDefault();
        this.scroll();
      }}>
      <ChevronUp size="24" />
    </button>
    // }
  }

  render() {
    return (
      <Layout className="trans-all" >
        <Banner />
        <div className="parallax2">
          <OurFood />
          <Channels />
          <Store />
        </div>
        <ImageBlock />
        {this.backToTop()}
        <Footer />
      </Layout>
    )
  }

}


export default Home
