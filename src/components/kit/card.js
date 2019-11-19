import React from 'react'


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div  {...this.props} className={"bg-white shadow p-6 rounded " + this.props.className}>
                {this.props.children}
            </div>
        )
    }

}


export default Card