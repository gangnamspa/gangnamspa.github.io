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
                <b>Admission</b>
                <br />
                <small>includes use of all facilities</small>
                <br />
                <small>services excluded</small>
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
            <tr>
              <td colSpan="2">
                <b>Overnight Fee </b>: Customers staying in between midnight to
                4am will be charged overnight fee. After 24 hours, guests will
                be charged another entrance fee. Please note there is no reentry
                once you have checked in.
              </td>
            </tr>
            {/* Body Scrub */}
            <tr>
              <td>
                <b>Body Scrub</b>
              </td>
              <td />
            </tr>
            <tr>
              <td>
                Basic Scrub
                <br />
                <small>Korean traditional body scrub only</small>
              </td>

              <td>$65</td>
            </tr>
            <tr>
              <td>
                Premium Scrub
                <br />
                <small>Korean traditional body scrub with oil massage</small>
              </td>

              <td>$110</td>
            </tr>
            <tr>
              <td>
                Premium Scrub with Facial
                <br />
                <small>Premium scrub with cucumber facial mask</small>
              </td>

              <td>$130</td>
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
                GangNam Special (90min)
                <br />
                <small>Combo/ Aroma</small>
              </td>
              <td>$180</td>
            </tr>

            <tr>
              <td>
                Daily Massage (60min)
                <br />
                <small>Body massage with facial mask</small>
              </td>

              <td>$90</td>
            </tr>
            <tr>
              <td>
                Daily Massage (90min)
                <br />
                <small>Body massage with facial mask</small>
              </td>

              <td>$130</td>
            </tr>
            <tr>
              <td>
                Combo Massage (90min)
                <br />
                <small>Body massage with facial and foot massages</small>
              </td>

              <td>$140</td>
            </tr>
            <tr>
              <td>Foot Massage (30min)</td>

              <td>$40</td>
            </tr>
            <tr>
              <td>Foot Massage (60min)</td>

              <td>$70</td>
            </tr>
            {/* Nails */}
            <tr>
              <td>
                <b>NAILS</b>
              </td>
              <td />
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
