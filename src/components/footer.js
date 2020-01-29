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
      <footer className="bg-black z-50 flex justify-center">
        <div className="absolute p-12 relative w-9/12">
          <div className="flex flex-wrap border-b border-gray-600 pb-4">

            <div className="loc w-full text-center sm:text-left md:w-2/6 font-hairline text-sm p-4">
              <img src="static/assets/logo-2.png" alt="logo" className="w-64" />
              <p className="mx-2 text-left text-sec font-normal"> {this.state.about.address}</p>

              <div className="mx-2 text-sec font-normal">
                <div className="flex items-center">
                  <Phone size="14" className="mt-1 mx-2" />
                  <p>{this.state.about.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail size="14" className="mt-1 mx-2" />
                  <p>{this.state.about.email}</p>
                </div>
                <div className="flex">
                  <MapPin size="16" className="mt-2 mx-1 ml-1" />
                  <p className="">{this.state.about.address}</p>
                </div>
              </div>
            </div>
            <div className="pt-5 w-full text-sec font-semibold sm:text-left sm:w-1/3 md:w-1/6 links text-sm">
              <h1 className="flex items-center justify-center md:justify-start mt-2 font-hairline text-prim text-lg mb-6 sm:w-full font-normal">
                Quick Links
          </h1>
              <p>
                <a href="/" className="flex items-center justify-center md:justify-start hover:text-white hover:no-underline font-normal">
                  Home
            </a>
              </p>
              <p>
                <a href="/about-us" className="flex items-center justify-center md:justify-start hover:text-white hover:no-underline font-normal">
                  About us
            </a>
              </p>
              <p>
                <a
                  href="/contact-us"
                  className="flex items-center justify-center md:justify-start hover:text-white hover:no-underline font-normal"
                >
                  Contact Us
            </a>
              </p>
              {/* <p>Carear</p> */}
            </div>
            <div className="pt-5 w-full text-sec font-semibold sm:text-left sm:w-1/3 md:w-1/6 links text-sm">
              <h1 className="flex items-center justify-center md:justify-start mt-2 sm:w-full text-prim font-hairline text-lg mb-6 lg:w-2/3 font-normal">
                Follow Us
          </h1>
              {this.state.basics.map((item, i) => {
                return (
                  <div className="w-full" key={i}>
                    <p className="flex items-center justify-center md:justify-start w-full">
                      {" "}
                      {/* <i className="fab fa-twitter"></i>{" "} */}
                      <Twitter size="12" />
                      <a
                        href={item.twitter}
                        target="_blank"
                        className="hover:text-white mx-1 hover:no-underline font-normal"
                      >
                        Twitter
                  </a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start w-full">
                      {" "}
                      {/* <i className="fab fa-instagram"></i>{" "} */}
                      <Instagram size="12" />
                      <a
                        href={item.instagram}
                        target="_blank"
                        className="hover:text-white mx-1 hover:no-underline font-normal"
                      >
                        Instagram
                  </a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start">
                      {" "}
                      {/* <i className="fab fa-facebook"></i>{" "} */}
                      <Facebook size="12" />
                      <a
                        href={item.facebook}
                        target="_blank"
                        className="hover:text-white mx-1 hover:no-underline font-normal"
                      >
                        Facebook
                  </a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start">
                      {" "}
                      <Youtube size="12" />
                      {/* <i className="fab fa-youtube"></i>{" "} */}
                      <a
                        href={item.youtube}
                        target="_blank"
                        className="hover:text-white mx-1 hover:no-underline font-normal"
                      >
                        Youtube
                  </a>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="pt-5 w-full  text-sec font-semibold sm:text-left sm:w-1/3 md:w-1/6 links text-sm">
              <h1 className="flex items-center justify-center md:justify-start mt-2 w-full text-prim font-hairline text-lg mb-6 font-normal">
                Download Our App
              </h1>
              <div className="flex items-center justify-center md:justify-start">
                <img
                  className=" mt-4 border rounded w-24"
                  src="static/assets/ios.png"
                ></img>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img
                  className=" mt-2 border rounded w-24"
                  src="static/assets/android.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
