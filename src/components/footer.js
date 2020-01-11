import React from "react";
import AppService from "./../services/app.service";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Youtube
} from "react-feather";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basics: [],
      about: []
    };
  }

  componentDidMount() {
    AppService.get("basics/get")
      .then(response => {
        this.setState({
          basics: response ? response : []
        });
      })
      .catch(err => console.error(err));

    AppService.getMethode("about/get")
      .then(response => {
        if (response.length === 0) {
          this.setState({ isEmpty: true });
        } else {
          this.setState({
            about: response[0]
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <footer className="bg-black absolute flex flex-wrap p-12 text-red-600 relative z-40">
        <div className="loc w-full text-center sm:text-left md:w-2/6 font-hairline text-sm p-4">
          <img src="static/assets/logo-2.png" alt="logo" className="w-64" />
          <p className="mx-2 justify-start flex"> {this.state.about.address}</p>

          <div className="mx-2">
            <div className="mx-auto mt-2 justify-start flex items-center">
              <Phone size="14" className="mx-1 mt-1" />
              <p>{this.state.about.phone}</p>
            </div>
            <div className="flex justify-start items-center">
              <Mail size="12" className="mx-1 mt-1" />
              <p>{this.state.about.email}</p>
            </div>
            <div className="flex  justify-start items-center">
              <MapPin size="14" className=" sm:-mt-6 ml-1 lg:mt-1" />
              <p className="px-1 sm:mr-8">{this.state.about.address}</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:text-left sm:w-1/3 md:w-1/6 md links text-sm p-2 mt-3">
          <h1 className="font-hairline text-red-700 text-lg mb-2 sm:w-full">
            Quick Links
          </h1>
          <p>
            <a href="/" className="hover:text-white hover:no-underline">
              Home
            </a>
          </p>
          <p>
            <a href="/about-us" className="hover:text-white hover:no-underline">
              About us
            </a>
          </p>
          <p>
            <a
              href="/contact-us"
              className="hover:text-white hover:no-underline"
            >
              Contact Us
            </a>
          </p>
          {/* <p>Carear</p> */}
        </div>
        <div className="w-full sm:text-left sm:w-1/3 md:w-1/5 links text-sm p-4">
          <h1 className="sm:w-full font-hairline text-red-700 text-lg mb-2 sm:ml-10 lg:w-2/3">
            Follow Us
          </h1>
          {this.state.basics.map((item, i) => {
            return (
              <div className="w-full sm:ml-10 lg:ml-10" key={i}>
                <p className="flex items-center w-full">
                  {" "}
                  {/* <i className="fab fa-twitter"></i>{" "} */}
                  <Twitter size="12" />
                  <a
                    href={item.twitter}
                    target="_blank"
                    className="hover:text-white mx-1 hover:no-underline"
                  >
                    Twitter
                  </a>
                </p>
                <p className="flex items-center w-full">
                  {" "}
                  {/* <i className="fab fa-instagram"></i>{" "} */}
                  <Instagram size="12" />
                  <a
                    href={item.instagram}
                    target="_blank"
                    className="hover:text-white mx-1 hover:no-underline"
                  >
                    Instagram
                  </a>
                </p>
                <p className="flex items-center ">
                  {" "}
                  {/* <i className="fab fa-facebook"></i>{" "} */}
                  <Facebook size="12" />
                  <a
                    href={item.facebook}
                    target="_blank"
                    className="hover:text-white mx-1 hover:no-underline"
                  >
                    Facebook
                  </a>
                </p>
                <p className="flex items-center ">
                  {" "}
                  <Youtube size="12" />
                  {/* <i className="fab fa-youtube"></i>{" "} */}
                  <a
                    href={item.youtube}
                    target="_blank"
                    className="hover:text-white mx-1 hover:no-underline"
                  >
                    Youtube
                  </a>
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full  sm:text-left sm:w-1/3 md:w-1/6 links text-sm mt-4 sm:ml-20">
          <h1 className="w-full font-hairline text-red-700 text-lg mb-2 ">
            Download Our App
          </h1>

          <img
            className=" mt-4 border rounded sm:w-48 h-4 lg:w-32 h-6"
            src="static/assets/ios.png"
          ></img>
          <img
            className=" mt-2 border rounded sm:w-48 h-4 lg:w-32 h-6"
            src="static/assets/android.png"
          ></img>
        </div>
      </footer>
    );
  }
}

export default Footer;
