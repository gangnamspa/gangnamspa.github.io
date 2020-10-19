import React from 'react';

const Reviews = (props) => {
  const title = props.title || 'What People Are Saying';
  return (
    <div className="bg-light p-t-50 p-b-40">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5 className="text-line">
              {title}
            </h5>
          </div>
        </div>
        <div className="row center-align">
          <div className="col s12 l4">
            <h5 className="gns-review">
              coming soon...
            </h5>
          </div>
          <div className="col s12 l4">
            <h5 className="gns-review">
              coming soon...
            </h5>
          </div>
          <div className="col s12 l4">
            <h5 className="gns-review">
              coming soon...
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;