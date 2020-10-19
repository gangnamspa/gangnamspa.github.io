import React from "react";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";

const routes = {
  "/": "Home",
  "/policy": "Policies",
  "/price": "Pricing",
  "/facilities": "Facilities",
  "/dining": "Dining",
  "/promotion": "Promotion",
  "/services": "Services",
  "/contact": "Contact",
  "/appointment": "Book a Treatment",
  "/massagechair": "Massage Chairs"
};

const PageHeader = props => {
  const { content } = props;
  return (
    <div className="grey darken-3 white-text overflow-hidden p-t-30 p-b-50">
      <div className="row container">
        <div className="col s12">
          <Breadcrumbs
            WrapperComponent={props => (
              <ul className="breadcrumbs">{props.children}</ul>
            )}
            ActiveLinkComponent={props => (
              <li className="active">{props.children}</li>
            )}
            LinkComponent={props => <li>{props.children}</li>}
            mappedRoutes={routes}
          />
        </div>

        <h2 className="col s12 under">{content}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
