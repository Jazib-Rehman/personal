import React from 'react'
import Layout from './../layout'
import Findus from './findus'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'
import AppService from "./../../services/app.service";

class FindUs extends React.Component {

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
      <Layout >
        <Findus />
        {this.state.basics.map((item, i) => {
          return <div key={i} style={{ backgroundImage: `url(${item.findUsImage})` }} className="parallax">
          </div>
        })}
        <Footer />
      </Layout>
    )
  }
}

export default FindUs
