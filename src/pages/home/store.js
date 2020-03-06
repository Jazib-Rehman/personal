import React from "react";
import mock from "./../mock.json";
import AppService from "./../../services/app.service";
import { Link } from "react-router-dom";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locators: [],
      basics: []
    };
  }

  componentDidMount() {
    AppService.getMethode("locators/get")
      .then(response => {
        this.setState({ locators: response ? response : [] });
      })
      .catch(err => console.error(err));
    AppService.get("basics/get")
      .then(response => {
        this.setState({
          basics: response ? response : []
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    {
      return this.state.basics.map((item, i) => {
        return (
          <section key={i} style={{ backgroundImage: `url(${item.steckers})` }} className="flex justify-center relative text-center py-12 -mb-32 bg-none parallax">
            <div className="w-full relative text-center">
              <h1 className="flex items-center justify-center font-prim">
                <span className="text-xl px-4 text-prim">STORE</span>
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
              <div className="pb-5 pt-4 md:flex justify-center z-40 w-full m-auto items-center">
                {this.state.locators.map((item, i) => (
                  <div className="py-2 px-3 cursor-pointer" key={i}>
                    <Link to="/find-us" style={{ textDecoration: 'none' }}>
                      <div className="catCard">
                        <div className="bg-orange py-2 text-white no-underline trans-all">
                          <p className="text-sm md:text-lg font-normal uppercase truncate">{item.name}</p>
                        </div>
                        <img
                          src={item.image}
                          alt="dummy"
                          className="m-auto w-full h-full md:w-64 md:h-64 object-cover"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })
    }
  }
}

export default Store;
