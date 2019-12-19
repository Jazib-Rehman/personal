
import React from 'react'
import AppService from '../../services/app.service'

class Findus extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            locators: [],
            selectedMap: 0,
        }
    }

    componentDidMount() {
        AppService.getMethode('locators/get')
            .then(response => {
                this.setState({ locators: response })
            })
            .catch(err => console.error(err));
    }

    handleMaps(selectedMap) {
        this.setState({
            selectedMap
        })
    }

    uiLocationButton(item, index) {
        return (
            <div className="">
                <button type="button" key={index} onClick={() => this.handleMaps(index)}
                    className="hover:cursor-pointer locatorBtn h-full rounded-none text-xs font-bold btn text-prim bg-white">
                    {item.name}</button>
            </div>
        );
    }

    render() {
        return (
            <section className="relative text-center py-24 z-30">
                <div className="flex h-80 bg-grid">
                    <div className="md:w-5/12 hidden md:block">
                        <img src="https://shawarmer.com/assets/common/1720x901.jpg" className="w-full h-full object-cover" alt="badge" />
                    </div>
                    <div className="w-full md:w-7/12">
                        <div className="w-full h-full flex justify-center items-center">
                            <div>
                                <p className="text-2xl ">Our branches in the kingdom</p>
                                <p className="text-sm text-gray-500 mt-6">Our branches in the kingdom</p>
                                <div className="flex flex-wrap justify-center mt-6 relative z-50">
                                    {
                                        this.state.locators.map((item, i) => this.uiLocationButton(item, i))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.locators.filter((item, i) => i === this.state.selectedMap).map((item, i) => {
                            return (<div className="gmap_canvas" key={i} id={i}><iframe className="w-full" id="gmap_canvas"
                                src={item.map} frameBorder="0"
                                scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>)
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Findus