import React from "react";
import mock from "./../mock.json";
import AppService from "./../../services/app.service";
import { Link } from "react-router-dom";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locators: []
    };
  }

  componentDidMount() {
    AppService.getMethode("locators/get")
      .then(response => {
        this.setState({ locators: response ? response : [] });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <section className="z-30 parallax2 flex justify-center">
        <div className="w-full relative text-center">
          <h1 className="flex items-center justify-center font-prim">
            <span className="text-lg px-4 text-prim">STORE</span>
            <span className="text-3xl border-orange-400 text-prim border-l-2 px-4">
              {" "}
              LOCATOR{" "}
            </span>
          </h1>
          <div className="">
            <p className="mt-4 text-gray-500 font-light text-sm">
              Find our stores across the kingdom
          </p>
          </div>
          <div className="pb-5 md:flex justify-center m-auto">
            {this.state.locators.map((item, i) => (
              <div className="p-2 cursor-pointer" key={i}>
                <Link to="/find-us" style={{ textDecoration: 'none' }}>
                  <div className="catCard">
                    <div className="bg-orange py-1 text-white no-underline trans-all">
                      <p className="truncate">{item.name}</p>
                    </div>
                    <img
                      src={item.image}
                      alt="dummy"
                      className="m-auto w-full h-full md:w-56 md:h-56 object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}
            {this.state.locators.map((item, i) => (
              <div className="p-2 cursor-pointer" key={i}>
                <Link to="/find-us" style={{ textDecoration: 'none' }}>
                  <div className="catCard">
                    <div className="bg-orange py-1 text-white no-underline trans-all">
                      <p className="truncate">{item.name}</p>
                    </div>
                    <img
                      src={item.image}
                      alt="dummy"
                      className="m-auto w-full h-full md:w-56 md:h-56 object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}
            {this.state.locators.map((item, i) => (
              <div className="p-2 cursor-pointer" key={i}>
                <Link to="/find-us" style={{ textDecoration: 'none' }}>
                  <div className="catCard">
                    <div className="bg-orange py-1 text-white no-underline trans-all">
                      <p className="truncate">{item.name}</p>
                    </div>
                    <img
                      src={item.image}
                      alt="dummy"
                      className="m-auto w-full h-full md:w-56 md:h-56 object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}
            {this.state.locators.map((item, i) => (
              <div className="p-2 cursor-pointer" key={i}>
                <Link to="/find-us" style={{ textDecoration: 'none' }}>
                  <div className="catCard">
                    <div className="bg-orange py-1 text-white no-underline trans-all">
                      <p className="truncate">{item.name}</p>
                    </div>
                    <img
                      src={item.image}
                      alt="dummy"
                      className="m-auto w-full h-full md:w-56 md:h-56 object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>
    );
  }
}

export default Store;
