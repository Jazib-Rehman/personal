import React from "react";

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tags: this.props.meal.tags ? this.props.meal.tags.split(',') : []
    };
  }

  render() {
    return (
      <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 mt-4 md:p-1">
        <div className="cursor-pointer">
          <img
            className="m-auto meal object-cover rounded-lg zoom-in"
            src={this.props.meal.image}
            alt="Shawarma"
          />
          <h2 className="text-dark text-md p-2">{this.props.meal.name}</h2>
          <div className="flex justify-center pb-4">
            {this.props.meal.tags.map((tag, i) => (
              <div className="truncate inline-block px-2 rounded-full bg-orange-400 text-white text-xs mr-1">
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Meal;
