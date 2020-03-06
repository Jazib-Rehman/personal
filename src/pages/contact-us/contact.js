import React from "react";
import {
  MapPin,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  CreditCard
} from "react-feather";
import AppService from "./../../services/app.service";
import queryString from "query-string";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: "",
      l_name: "",
      email: "",
      message: "",
      basics: [],
      about: [],
      error: false,
      successMessage: false
    };
  }

  componentDidMount() {
    AppService.getMethode("basics/get")
      .then(response => {
        this.setState({ basics: response ? response : [] });
        AppService.getMethode('about/get')
          .then(response => {
            this.setState({
              about: response
            })
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }

  handleChange = (property, event) => {
    const state = this.state;
    state[property] = event.target.value;
    this.setState({ state: state });
    console.log(this.state);
  };

  handleClick = () => {
    if (
      this.state.f_name === "" ||
      this.state.l_name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      this.setState({
        error: true
      });
    } else {
      const data = new FormData();
      data.append("f_name", this.state.f_name);
      data.append("l_name", this.state.l_name);
      data.append("email", this.state.email);
      data.append("message", this.state.message);
      AppService.axiosPost("feedback/add", data)
        .then(response => {
          // window.location.href = window.location.pathname + "?successMessage=true"
          this.setState({ successMessage: true });
        })
        .catch(err => console.error(err));
    }
  };

  error() {
    if (this.state.error === true) {
      return (
        <div className="bg-red-500 py-2 px-4 text-white">
          You have to enter all fields in order to contact us!
        </div>
      );
    }
  }

  success() {
    // const successMessage = queryString.parse(window.location.search).successMessage;
    if (this.state.successMessage === true) {
      return (
        <div className="bg-green-500 py-2 px-4 text-white">
          Thank you for your feedback!
        </div>
      );
    }
  }

  render() {
    return (
      <section class="relative text-center py-24 z-40">
        <div className="relative -mb-64 md:py-4 bg-dark-trans z-40 parallax2 flex justify-center">
          <div className=" screen rounded-lg lg:mx-48 my-10 w-full md:w-7/12 bg-white-trans py-16 shadow shadow-xl">
            <div className="-mt-8">
              <p className="text-lg md:text-xl font-bold uppercase text-orange-600">
                Get in touch with us
              </p>
            </div>
            {this.error()}
            {this.success()}
            <div className="flex">
              <div className="w-1/2">
                {this.state.about ?
                  this.state.about.map((item, i) => {
                    return <div className="mt-4 w-full hidden md:block">
                      <div className="text-left hidden md:flex py-2 px-16 flex">
                        <div className="text-blue-500 px-6 flex justify-center mt-4">
                          <MapPin size="24" />
                        </div>
                        <div className="">
                          <p className="text-lg">Site management Shawarmer</p>
                          <p className="text-sm text-gray-700">
                            {item.address ? item.address : "Not available"}
                          </p>
                        </div>
                      </div>
                      <div className="text-left hidden md:flex py-2 px-16 mt-10 flex">
                        <div className="text-red-400 px-6 flex justify-center mt-4">
                          <CreditCard size="24" />
                        </div>
                        <div>
                          <p className="text-lg">To contact us</p>
                          <p className="text-sm text-gray-700">
                            {item.email ? item.email : "Not available"}
                          </p>
                          <p className="text-xs text-gray-700 mt-2">
                            Uniform Number: {item.phone ? item.phone : "Not available"}
                          </p>
                        </div>
                      </div>
                    </div>
                  }) : <div className="flex justify-center items-center w-full h-full">
                    <p className="text-2xl font-thin">Nothing Avilable Here!</p>
                  </div>
                }
              </div>
              <div className="mt-4 w-full md:w-1/2">
                <div className="text-left py-2 px-16">
                  <div className="flex">
                    <div className="mx-1 w-full">
                      <p className="font-xs md:text-sm text-gray-700 font-semibold">
                        First name:
                      </p>
                      <input
                        type="text"
                        onChange={this.handleChange.bind(this, "f_name")}
                        name="f_name"
                        className="p-2 bg-white font-xs w-full md:w-full lg:w-full  md:text-xs rounded border border-red-300 outline-none"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mx-1 w-full">
                      <p className="font-xs md:text-sm text-gray-700 font-semibold">
                        Last name:
                      </p>
                      <input
                        type="text"
                        onChange={this.handleChange.bind(this, "l_name")}
                        name="l_name"
                        className="p-2 bg-white font-xs w-full md:w-full lg:w-full md:text-xs rounded border border-red-300 outline-none"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mx-1 mt-4">
                    <p className="font-xs md:text-sm text-gray-700 font-semibold">
                      E-mail:
                    </p>
                    <input
                      type="text"
                      onChange={this.handleChange.bind(this, "email")}
                      name="email"
                      className="p-2 bg-white w-full font-xs md:w-full lg:w-full md:text-xs rounded border border-red-300 outline-none"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div className="mx-1 mt-4">
                    <p className="font-xs md:text-sm  text-gray-700 font-semibold">
                      Message:
                    </p>
                    <textarea
                      type="text"
                      onChange={this.handleChange.bind(this, "message")}
                      name="message"
                      className="p-2 bg-white w-full font-xs md:w-full lg:w-full md:text-xs rounded border border-red-300 outline-none"
                      placeholder="Your message!"
                    ></textarea>
                  </div>
                  <div className="mx-1 mt-4 text-right">
                    <button
                      onClick={this.handleClick}
                      className="btn rounded font-xs md:text-xs md:w-40 text-prim bg-orange-600 text-white font-bold outline-none"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-16">
              <div className="border-t-2 border-orange-400"></div>
              <p className="mt-2 text-xs md:text-sm ">
                Find us on social networks
              </p>
              <div className="py-2">
                {this.state.basics.map((item, i) => {
                  return (
                    <div className="flex justify-center">
                      <a
                        href={item.twitter}
                        target="_blank"
                        className="hover:bg-gray-900 tans-all text-gray-400 rounded-full h-8 w-8 flex items-center justify-center bg-gray-700 text-white mx-1"
                      >
                        <Twitter size="18" />
                      </a>
                      <a
                        href={item.facebook}
                        target="_blank"
                        className="hover:bg-gray-900 tans-all text-gray-400 rounded-full h-8 w-8 flex items-center justify-center bg-gray-700 text-white mx-1"
                      >
                        <Facebook size="18" />
                      </a>
                      <a
                        href={item.instagram}
                        target="_blank"
                        className="hover:bg-gray-900 tans-all text-gray-400 rounded-full h-8 w-8 flex items-center justify-center bg-gray-700 text-white mx-1"
                      >
                        <Instagram size="18" />
                      </a>
                      <a
                        href={item.youtube}
                        target="_blank"
                        className="hover:bg-gray-900 tans-all text-gray-400 rounded-full h-8 w-8 flex items-center justify-center bg-gray-700 text-white mx-1"
                      >
                        <Youtube size="18" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
