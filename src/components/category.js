import React from "react";
import Meal from "./meal";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="menu mt-12">
        <div className="flex items-center font-prim text-prim font-thin relative justify-between text-2xl">
          <div className="title2"></div>
          <p className="w-full">
            {this.props.category.name}
          </p>
          <div className="title2"></div>
        </div>
        <div className="flex flex-wrap justify-center mt-8 m-auto w-full">
          {this.props.category.products.map((item, j) => (
            <Meal meal={item} key={j} />
          ))}
        </div>
      </section>
    );
  }
}

export default Category;
