import React from "react";
import PageHeader from "../components/PageHeader";

const PricePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PageHeader content="Pricing Chart" />
      <div className="container p-t-20 p-b-20">
        <table
          className="table highlight"
          style={{
            width: "75%",
            margin: "0 auto",
          }}
        >
          <thead>
            <tr>
              <th>CATEGORIES</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {/* Admission */}
            <tr>
              <td>
                <b>ADMISSION</b>
                <br />
                <small>includes use of all facilities</small>
                <br />
                <small>services, restaurant, and products excluded</small>
              </td>
              <td>
                $39 (weekdays)
                <br />
                $49 (weekends & holidays)
              </td>
            </tr>
            {/* <tr>
              <td>Ages 4-9 </td>
              <td>50% off on regular price</td>
            </tr>
            <tr>
              <td>Ages Under 4</td>
              <td>FREE</td>
            </tr> */}
            {/* <tr>
              <td colSpan="2">
                <b>Overnight Fee </b>: Customers staying in between midnight to
                4am will be charged overnight fee. After 24 hours, guests will
                be charged another entrance fee. Please note there is no reentry
                once you have checked in.
              </td>
            </tr> */}
            {/* Body Scrub */}
            <tr>
              <td>
                <b>BODY SCRUB</b>
              </td>
              <td />
            </tr>
            <tr>
              <td>
                Basic Scrub (30 minutes)
                <br />
                <small>Korean traditional body scrub only</small>
              </td>

              <td>$65</td>
            </tr>
            <tr>
              <td>
                Premium Scrub (1 hour)
                <br />
                <small>Korean traditional body scrub with oil massage</small>
              </td>

              <td>$110</td>
            </tr>
            <tr>
              <td>
                Premium Scrub with Facial (1 hour and 20 minutes)
                <br />
                <small>Premium scrub with cucumber facial mask</small>
              </td>

              <td>$130</td>
            </tr>
            <tr>
              <td>
                Premium Gold Scrub ( 1 hour and 30 minutes)
                <br />
                <small>
                  Premium scrub with gold oil massage and facial massage
                </small>
              </td>

              <td>$160</td>
            </tr>
            <tr>
              <td>
                <small>
                  ** All premium scrubs come with hair wash. However, it can be
                  excluded from the package. When booking, please let us know to
                  substitute more time on the scrub or massage.
                </small>
              </td>
              <td />
            </tr>
            {/* Massage */}
            <tr>
              <td>
                <b>MASSAGE</b>
              </td>
              <td />
              <td />
            </tr>

            <tr>
              <td>
                GangNam Spa Special (1 hour and 40 minutes)
                <br />
                <small>
                  Am in depth gold mask pack, aroma oil and hot stone massage
                </small>
              </td>
              <td>$250</td>
            </tr>

            <tr>
              <td>
                GangNam Couple Special Gold Course (2 hours)
                <br />
                <small>
                  An in depth body massage with gold mask pack, gold nano oil
                  and hot stone massage
                </small>
              </td>
              <td>$490</td>
            </tr>

            <tr>
              <td>
                Daily Massage (1 hour)
                <br />
                <small>
                  Body massage with oil massage in upper body and acupressure
                  massage in the lower body
                </small>
              </td>

              <td>$100</td>
            </tr>
            <tr>
              <td>
                Daily Massage (1 hour 30 minutes)
                <br />
                <small>
                  Body massage with oil massage in upper body and acupressure
                  massage in the lower body with facial mask
                </small>
              </td>

              <td>$130</td>
            </tr>
            <tr>
              <td>
                Combo Massage (1 hour 30 minutes)
                <br />
                <small>Body massage with facial and foot massages</small>
              </td>

              <td>$140</td>
            </tr>
            <tr>
              <td>Foot Massage (30min)</td>

              <td>$50</td>
            </tr>
            <tr>
              <td>Foot Massage (60min)</td>

              <td>$80</td>
            </tr>
            {/* Nails */}
            <tr>
              <td>
                <b>NAILS</b>
                <br />
                <small>
                  ** We are currently not taking any nails or facial
                  appointments **
                </small>
              </td>
              <td />
            </tr>
            <tr>
              <td>Classic Manicure</td>

              <td>$20</td>
            </tr>
            <tr>
              <td>Classic Pedicure</td>

              <td>$35</td>
            </tr>
            <tr>
              <td>Classic Manicure + Pedicure Combo</td>

              <td>$50</td>
            </tr>
            <tr>
              <td>Shellac / Gel Manicure</td>

              <td>$40</td>
            </tr>
            <tr>
              <td>Shellac / Gel Pedicure</td>

              <td>$50</td>
            </tr>
            <tr>
              <td>Shellac / Gel Manicure + Pedicure Combo</td>

              <td>$90</td>
            </tr>
            <tr>
              <td>Manicure Treatment</td>

              <td>$20</td>
            </tr>
            <tr>
              <td>Pedicure Treatment</td>

              <td>$35</td>
            </tr>
            <tr>
              <td>Foot Detox</td>

              <td>
                $30
                <br />
                $40 (with regular color)
                <br />
                $50 (with shellac / gel color)
              </td>
            </tr>
            <tr>
              <td>Additionals</td>

              <td>
                Hand Mask $5
                <br />
                Foot Mask $5
                <br />
                Callus Removal $5
                <br />
                Nail Design $3-$5/Nail
              </td>
            </tr>
            {/* Facial */}
            <tr>
              <td>
                <b>FACIAL</b>
                <br />
                <small>
                  ** We are currently not taking any nails or facial
                  appointments **
                </small>
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>European mini facial (1 hour)</td>
              <td>$90</td>
            </tr>
            <tr>
              <td>European full facial (1.5 hrs)</td>
              <td>$130</td>
            </tr>
            <tr>
              <td>Gangnam special premium facial (1hr 40min)</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricePage;
