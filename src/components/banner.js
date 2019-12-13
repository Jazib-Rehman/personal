import AppService from './../services/app.service'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: []
        }
    }

    componentDidMount() {
        AppService.getMethode('banner')
            .then(response => {
                this.setState({ banners: response })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <section className="overflow-hidden relative z-20 w-full banner">
                    <Carousel>
                        {
                            this.state.banners.map((item, i) => {
                                return <Carousel.Item key={i}>
                                    <img
                                        className="d-block banner w-full object-cover"
                                        src={item.image}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{item.name}</h3>
                                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </section>


            </div>
        )
    }

}


export default Banner