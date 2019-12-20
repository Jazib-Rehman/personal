import React from 'react'
import AppService from './../../services/app.service'

class AboutUs extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            about: []
        }
    }

    componentDidMount() {
        AppService.getMethode('about/get')
            .then(response => {
                if (response.length === 0) {
                    this.setState({ isEmpty: true })
                } else {
                    this.setState({
                        about: response[0]
                    })
                }
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <section class="relative py-24 z-40">
                <div className="pt-10 text-center z-20">
                    <h1 className="flex items-center justify-center font-prim text-dark">
                        <span className="text-lg px-4 text-prim">OUR</span>
                        <span className="text-3xl border-l-2 text-prim border-orange-400 border-black px-4"> STORY </span>
                    </h1>
                </div>
                <div className="mt-20 px-sm md:px-32 lg:px-48 z-20">
                    <p className="text-gray-500 text-sm">
                        {this.state.about.title} ...
                    </p>
                    <p className="text-gray-500 text-xs mt-2 whitespace-pre-wrap">
                        {this.state.about.description}
                    </p>
                </div>

            </section>

        )
    }
}

export default AboutUs