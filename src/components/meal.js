import React from "react";
import Popup from "reactjs-popup";

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
        <Popup className="rounded-lg" modal trigger={
          <div className="flex justify-center cursor-pointer">
            <div>
              <div className="rounded-lg meal overflow-hidden">
                <img
                  className="m-auto meal object-cover rounded-lg zoom-in"
                  src={this.props.meal.image}
                  alt="Shawarma"
                />
              </div>
              <p className="text-dark text-md mt-2 font-semibold">{this.props.meal.name}</p>
              <p className="text-dark text-md">{this.props.meal.description}</p>
              <p className="text-dark text-sm font-bold">{this.props.meal.price}</p>
              <div className="flex justify-center pb-4">
                {this.props.meal.tags.map((tag, i) => (
                  <div className="truncate inline-block px-2 rounded-full bg-orange-400 text-white text-xs mr-1">
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }>

          <div className="flex">
            <div className="w-2/3 py-4 pl-4">
              <img
                className="m-auto object-cover rounded-lg"
                src={this.props.meal.image}
                alt="Shawarma"
              />
            </div>
            <div className="w-1/3 py-4">
              <img
                className="m-auto meal object-cover rounded-lg zoom-in"
                src={this.props.meal.image}
                alt="Shawarma"
              />
              <div className="py-8 text-left px-4">
                <p className="text-dark text-md">{this.props.meal.name}</p>
                <div>
                  <p className="text-xs font-semibold pt-6">NUTRITION INFORMATION</p>
                </div>
                <p className="text-dark text-md">{this.props.meal.nutrition}</p>
                <div className="flex pt-6 items-center">
                  <p className="text-xs font-semibold">PRICE</p>
                  <p className="text-dark text-md px-2">{this.props.meal.price}</p>
                </div>
                <div className="flex flex-wrap pb-4 pt-4">
                  {this.props.meal.tags.map((tag, i) => (
                    <div className="truncate inline-block px-2 rounded-full bg-orange-400 text-white text-xs mr-1">
                      {tag.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Meal;
