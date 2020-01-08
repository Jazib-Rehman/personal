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
      <footer className="flex flex-wrap p-12 text-red-600 relative z-40">
        <div className="loc w-full text-center sm:text-left md:w-2/6 font-hairline text-sm p-4">
          <img
            src="static/assets/logo-2.png"
            alt="logo"
            className="w-64 mb-4"
          />
          <p className="mx-2 justify-start flex ">
            {" "}
            {this.state.about.address}
          </p>

          <div className="mx-2">
            <div className="mx-auto mt-4 justify-start flex items-center">
              <Phone size="12" className="mx-1 mt-2" />
              <p>{this.state.about.phone}</p>
            </div>
            <div className="flex justify-start items-center">
              <Mail size="10" className="mx-1 mt-2" />
              <p>{this.state.about.email}</p>
            </div>
            <div className="flex  justify-start items-center">
              <MapPin size="12" className="mt-1 mx-1" />
              <p>{this.state.about.address}</p>
            </div>
          </div>
        </div>
        <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 md links text-sm p-4">
          <h1 className="font-hairline text-red-700 text-lg mb-2">
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
        <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 links text-sm p-4">
          <h1 className="font-hairline text-red-700 text-lg mb-2">Follow Us</h1>
          {this.state.basics.map((item, i) => {
            return (
              <div className="ml-8" key={i}>
                <p className="flex items-center ">
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
                <p className="flex items-center ">
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
        <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 links text-sm p-4">
          <h1 className="font-hairline text-red-700 text-lg mb-2">
            Download Our App
          </h1>
          <p>ANDROIND</p>
          <p>IPHONE</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
