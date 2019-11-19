import React from 'react'


class Banner extends React.Component {

    render() {
        return (
            <div>
                <section className="overflow-hidden relative z-30 w-full">
                    <img src="static/assets/banner.jpg" alt="pizza" className="w-full" />
                </section>
            </div>
        )
    }

}


export default Banner