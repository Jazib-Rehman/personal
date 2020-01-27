import React from "react";
import mock from "./../mock.json";
import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import AppService from "./../../services/app.service";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      basics: []
    };
  }

  componentDidMount() {
    AppService.get("channels/get")
      .then(response => {
        this.setState({ categories: response ? response : [] });
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
    return (
      <section className=" section-shawrma text-center py-12 text-black relative z-30">
        <h1 className="flex items-center justify-center font-prim">
          <span className="text-sm md:text-lg text-prim px-4">SHAWARMER</span>
          <span className="text-2xl md:text-3xl border-orange-400 text-prim border-l-2 px-4">
            {" "}
            CHANNELS{" "}
          </span>
        </h1>
        <div className="">
          <p className="mt-4 text-gray-500 font-light text-sm">
            You can also find us on social media platforms
          </p>
        </div>
        <div className="mt-4">
          {this.state.basics.map((item, i) => {
            return (
              <div key={i} className="flex justify-center">
                <a
                  href={item.twitter}
                  target="_blank"
                  className="hover:bg-gray-700 tans-all text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-orange text-white mx-1"
                >
                  <Twitter size="18" />
                </a>
                <a
                  href={item.facebook}
                  target="_blank"
                  className="hover:bg-gray-700 tans-all text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-orange text-white mx-1"
                >
                  <Facebook size="18" />
                </a>
                <a
                  href={item.instagram}
                  target="_blank"
                  className="hover:bg-gray-700 tans-all text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-orange text-white mx-1"
                >
                  <Instagram size="18" />
                </a>
                <a
                  href={item.youtube}
                  target="_blank"
                  className="hover:bg-gray-700 tans-all text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-orange text-white mx-1"
                >
                  <Youtube size="18" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap md:w-1/2 md:p-0 m-auto px-2 pt-5">
          {this.state.categories.map((item, i) => (
            <a
              href={item.link}
              target="_blank"
              className="flex justify-center channels w-1/2 md:w-1/3 p-1"
              key={i}
            >
              <img
                src={item.image}
                alt="dummy"
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default Channels;
