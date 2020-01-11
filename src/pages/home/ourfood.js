import AppService from "./../../services/app.service";

import React from "react";
import Meal from "../../components/meal";

class OurFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      pdf: []
    };
  }

  componentDidMount() {
    AppService.get("categories/get")
      .then(response => {
        this.setState({ categories: response ? response : [] });
      })
      .catch(err => console.error(err));
    AppService.get("pdf/get")
      .then(response => {
        this.setState({ pdf: response ? response : [] });
      })
      .catch(err => console.error(err));
  }

  categories() {
    if (this.state.categories !== []) {
      return this.state.categories.map((item, i) => {
        return (
          <div className="w-56 h-full md:w-56 p-2 mt-6" key={i}>
            <div>
              <div className="bg-orange py-1 text-white">
                <p className="text-sm md:text-lg font-light">{item.name}</p>
              </div>
              <img
                src={item.image}
                alt="dummy"
                className="m-auto w-56 h-56 md:w-56 object-cover"
              />
            </div>
          </div>
        );
        // <Meal meal={item} key={i} />
      });
    } else {
      return <p className="text-2xl font-thin">Nothing Found!</p>;
    }
  }

  render() {
    return (
      <div className="bg-white bg-grid w-full">
        <div className="fixed top-100 left-0 w-screen overflow-hidden z-10 bages">
          <div className="flex w-full px-24">
            <div className="r-1">
              <img
                src="/static/assets/b10.png"
                className="w-48 mt-8 inline-block"
                alt="badge"
              />
              <img
                src="/static/assets/b4.png"
                className="w-48 mt-8 inline-block"
                alt="badge"
              />
            </div>
            <div className="flex-grow">.</div>
            <div className="r-2">
              <img
                src="/static/assets/b12.png"
                className="w-64 mt-8 inline-block"
                alt="badge"
              />
              <img
                src="/static/assets/b6.png"
                className="w-48 mt-8 inline-block"
                alt="badge"
              />
            </div>
          </div>
        </div>
        <section className="relative bg-dark-trans text-center py-12 z-40">
          <h1 className="flex items-center justify-center font-prim text-dark">
            <span className="text-lg md:text-lg px-4 text-prim">OUR</span>
            <span className="text-2xl md:text-3xl border-l-2 border-orange-400 px-4 text-prim">
              {" "}
              FOOD{" "}
            </span>
          </h1>
          <p className="mt-4 text-gray-500 font-light text-sm">
            Here you will find our full menu
          </p>

          <div className="my-4">
            <a
              className="btn bg-orange text-xs  md:text-lg text-white rounded-none"
              href="/menu"
            >
              OUR FULL MENU
            </a>
            {this.state.pdf.map((item, i) => {
              return (
                <a
                  className="btn bg-white text-xs md:text-lg text-orange rounded-none"
                  href={item.image}
                >
                  DOWNLOAD PDF
                </a>
              );
            })}
          </div>
          <div className="w-full md:px-24">
            <div className="slider horizontal mt-4 z-40 m-auto items-center">
              {this.categories()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default OurFood;
