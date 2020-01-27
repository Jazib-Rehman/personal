import React from "react";
import AppService from "./../services/app.service";

import counterpart from "counterpart";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basics: [],
      showMenu: false,
      color: 'rgba(0, 0, 0, 0.7)'
    };
  }

  listenScrollEvent = e => {
    if (window.scrollY > 500) {
      this.setState({ color: '#fd8b35' })
    } else {
      this.setState({ color: 'rgba(0, 0, 0, 0.7)' })
    }
  }

  componentDidMount() {
    AppService.get("basics/get")
      .then(response => {
        this.setState({
          basics: response ? response : []
        });
      })
      .catch(err => console.error(err));

    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (!this.node.contains(e.target)) {
      this.setState({
        showMenu: false
      });
    }
  };

  onLangChange = e => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  handleMenu(menu) {
    this.setState({
      showMenu: !menu
    });
  }

  get basics() {
    return this.state.basics ? this.state.basics : [];
  }

  hiddenMenu() {
    if (this.state.showMenu === true) {
      return (
        <div className="flex justify-center text-center trans-1">
          <ul className="navMenu mt-3">
            <li>
              <Link to="/">
                <p className="text-xs px-3 hover:text-white hover:no-underline">
                  HOME
                </p>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <p className="text-xs px-3 hover:text-white hover:no-underline">
                  OUR FOOD
                </p>
              </Link>
            </li>
            <li>
              <Link to="/find-us">
                <p className="text-xs px-3 hover:text-white hover:no-underline">
                  FIND US
                </p>
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <p className="text-xs px-3 hover:text-white hover:no-underline">
                  CONTACT US
                </p>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <p className="text-xs px-3 hover:text-white hover:no-underline">
                  About Us
                </p>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <header style={{ background: this.state.color }}
          className="header trans-1 absulote z-60 hidden md:flex font-prim text-white text-sm flex items-center fixed w-full py-2 bg-trans">
          <div className="w-1/3 md:w-1/2 px-2">
            <span className="px-2 border-r text-xs">عربي</span>
            {this.basics.map((item, i) => {
              return (
                <span className="px-2 text-xs" key={i}>
                  {item.site_header}
                </span>
              );
            })}
          </div>
          <div className="w-1/4 md:w-1/3  flex justify-center">
            {this.basics.map((item, i) => {
              return (
                <a href="/" key={i}>
                  <img src={item.logo} alt="logo" className="h-20" />
                </a>
              );
            })}
          </div>
          <div className="menu w-1/3  md:w-1/2 flex justify-end">
            <Link to="/">
              <p className="text-xs md:pl-6 md:px-2 lg:px-3 hover:text-white hover:no-underline">
                HOME
              </p>
            </Link>
            <Link to="/menu">
              <p className="text-xs md:px-2 lg:px-3 hover:text-white hover:no-underline">
                OUR FOOD
              </p>
            </Link>
            <Link to="/find-us">
              <p className="text-xs md:px-2 lg:px-3 hover:text-white hover:no-underline">
                FIND US
              </p>
            </Link>
            <Link to="/contact-us">
              <p className="text-xs md:px-2 lg:px-3 hover:text-white hover:no-underline">
                CONTACT US
              </p>
            </Link>
          </div>
        </header>

        <header
          ref={node => (this.node = node)}
          className="md:hidden navHeader bg-trans font-prim text-white text-sm items-center fixed w-full py-2 cursor-pointer items-center z-60"
        >
          <div className=" flex items-center w-full">
            <div className="flex flex-grow justify-start pl-2">
              {this.state.basics.map((item, i) => {
                return (
                  <a href="/" key={i}>
                    <img src={item.logo} alt="logo" className="h-16" />
                  </a>
                );
              })}
            </div>
            <div
              className="pr-2"
              onClick={() => this.handleMenu(this.state.showMenu)}
            >
              <Menu />
            </div>
          </div>
          {this.hiddenMenu()}
        </header>
      </div>
    );
  }
}

export default Header;
