import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import Modal from "react-modal";
import { stack as Menu } from "react-burger-menu";

import { PROMOTION_BANNER, currentDate } from "./utils/constants";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  HomePage,
  PolicyPage,
  PricePage,
  GuidePage,
  FacilityPage,
  DiningPage,
  PromoPage,
  ServicesPage,
  ContactPage,
  MassageChairPage,
} from "./pages";

import logoImage from "./images/logo.svg";

const customModalStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const customBurgerMenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#ffa000",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#ffa000",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#ffa000",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    boxShadow: "none",
  },
  bmItem: {
    display: "block",
    outline: "none",
    lineHeight: "1.5",
    marginBottom: "20px",
    borderBottom: "1px solid",
    color: "#fff",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const history = useHistory();
  const enableModal = false;
  const enableBanner = currentDate.getFullYear() !== 2021;
  const logoWidth = isMobileOnly ? "256" : "128";
  const logoClass = isMobileOnly ? "center-align" : "";

  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = (state) => setMenuOpen(false);
  // const toggleMenu = (state) => setMenuOpen(!menuOpen);
  const onClickMenu = (e) => {
    closeMenu();
    history.push(e.target.dataset.url);
  };

  return (
    <div id="outer-container">
      {isMobileOnly && (
        <Menu
          styles={customBurgerMenuStyles}
          isOpen={menuOpen}
          onStateChange={handleStateChange}
        >
          <span className="menu-item" onClick={onClickMenu} data-url="/">
            HOME
          </span>
          <span className="menu-item" onClick={onClickMenu} data-url="/policy">
            POLICY
          </span>
          <span className="menu-item" onClick={onClickMenu} data-url="/guide">
            GUIDE
          </span>
          <span className="menu-item" onClick={onClickMenu} data-url="/price">
            PRICE
          </span>
          <span
            className="menu-item"
            onClick={onClickMenu}
            data-url="/facilities"
          >
            FACILITIES
          </span>
          <span className="menu-item" onClick={onClickMenu} data-url="/dining">
            DINING
          </span>
          <span
            className="menu-item"
            onClick={onClickMenu}
            data-url="/services"
          >
            SERVICES
          </span>
          <span
            className="menu-item"
            onClick={onClickMenu}
            data-url="/promotion"
          >
            PROMOTIONS & MEMBERSHIP
          </span>
          <span
            className="menu-item"
            onClick={onClickMenu}
            data-url="/massagechair"
          >
            MASSAGE CHAIR
          </span>
          <span className="menu-item" onClick={onClickMenu} data-url="/contact">
            CONTACT US
          </span>
          <a
            className="menu-item"
            href="https://go.booker.com/location/GangnamSpa"
            rel="noopener noreferrer"
            target="_blank"
          >
            BOOK A TREATMENT
          </a>
        </Menu>
      )}

      <main id="page-wrap">
        {enableModal && (
          <Modal
            isOpen={modalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customModalStyles}
            contentLabel="Example Modal"
          >
            <h4 className="center-align">
              Gift Card Sale for Valentine's Day <br />
              <small>Buy a gift card and get free admission tickets!</small>
            </h4>
            <hr />
            <ul className="gns center-align" style={{ color: "red" }}>
              <li>Buy $150 Gift Card = One Free Admission Ticket</li>
              <li>Buy $250 Gift Card = Two Free Admission Tickets</li>
            </ul>
            <ul>
              <li>
                * This package voucher can be redeemed only at GangNam Spa.
              </li>
              <li>
                * No Extensions, Refunds, or Exchanges allowed on any Gift
                Cards.
              </li>
              <li>
                * Offer not valid for cash in exchange and cannot be combined
                with any other offers.
              </li>
            </ul>
            <div className="center-align">
              <button
                className="brown waves-effect waves-light btn m-t-5"
                onClick={closeModal}
              >
                CLOSE
              </button>
            </div>
          </Modal>
        )}
        {enableBanner ? (
          <div className="row brown white-text center-align">
            <div className="container">
              <h5
                style={{
                  padding: "15px 20px",
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {PROMOTION_BANNER}
              </h5>
            </div>
          </div>
        ) : (
          <div
            className="row brown white-text center-align"
            style={{ padding: "2px" }}
          />
        )}

        <div className="container">
          <div className="row m-t-20">
            <div className={`col s12 l5 ${logoClass}`}>
              <a href="/">
                <img
                  id="logo-top"
                  className="responsive-img"
                  width={logoWidth}
                  src={logoImage}
                  alt="logo-1"
                />
              </a>
            </div>

            <div className="col s12 l7">
              <Header />
              {!isMobileOnly && (
                <div
                  style={{ position: "fixed", top: 0, right: 0, zIndex: 999 }}
                >
                  <a
                    className="waves-effect btn brown"
                    href="https://go.booker.com/location/GangnamSpa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    BOOK A TREATMENT
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {!isMobileOnly && <Navbar />}

        <Route exact path="/" component={HomePage} title="Home" />
        <Route exact path="/price" component={PricePage} title="Price" />
        <Route exact path="/policy" component={PolicyPage} title="Policy" />
        <Route exact path="/guide" component={GuidePage} title="Guide" />
        <Route
          exact
          path="/facilities"
          component={FacilityPage}
          title="Facilities"
        />
        <Route exact path="/dining" component={DiningPage} title="Dining" />
        <Route
          exact
          path="/promotion"
          component={PromoPage}
          title="Promotion"
        />
        <Route
          exact
          path="/services"
          component={ServicesPage}
          title="Services"
        />
        <Route exact path="/contact" component={ContactPage} title="Contact" />
        <Route
          exact
          path="/massagechair"
          component={MassageChairPage}
          title="Massage Chair"
        />

        <Footer />
      </main>
    </div>
  );
}

export default App;
