import React from "react";
import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";
import defaultImage from "../images/image-empty.jpg";
import inadaImage from "../images/inada.jpg";

const MassageChair = props => {
  const { name, image, imageAlt, price, url } = props;
  return (
    <div className="col s12 m6 l4">
      <h5 className="header col s12 under">{name}</h5>
      <img
        className="responsive-img"
        src={image || defaultImage}
        alt={imageAlt}
      />
      <ul>
        <li>{price}</li>
        {url && (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

const MassageChairPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PageHeader content="TITAN World LLC / OTA World LLC" />
      <PageSection title="Home of Osaki and Titan brand">
        <div className="col s12">
          <h6>
            Titan makes it our number one priority to help relax your body, so
            you can enjoy a more active lifestyle. For further information of
            our massage chairs, please visit{" "}
            <a
              href="http://www.ota-houston1.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ota-houston1.com
            </a>
            .
          </h6>
        </div>
      </PageSection>
      <hr />
      <div className="row container">
        <MassageChair
          name="OS-4D Maestro (Brown)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p121_i5_w1001.jpeg"
          imageAlt="Maestro"
          price="$8,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
        <MassageChair
          name="OS-3D First Class (Dark Gray)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p88_i42_w600.jpeg"
          imageAlt="FirstClass"
          price="$7,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
        <MassageChair
          name="OS-3D Pro Ekon (Black)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p16_i1_w1000.jpeg"
          imageAlt="ProEkon"
          price="$7,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
      </div>
      <div className="row container">
        <MassageChair
          name="Osaki 3D OS-Pro Admiral (Brown)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p109_i37_w600.jpeg"
          imageAlt="Admiral"
          price="$6,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
        <MassageChair
          name="OS-3D Pro Capella (Taupe)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p118_i3_w1000.jpeg"
          imageAlt="Capella"
          price="$5,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
        <MassageChair
          name="Osaki OS-4000XT (Ivory)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p110_i32_w1000.jpeg"
          imageAlt="4000XT"
          price="$3,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
      </div>
      <div className="row container">
        <MassageChair
          name="OS Pro Yamato (Beige)"
          image="http://www.ota-houston1.com/uploads/1/2/6/6/126614239/s474558370533789991_p93_i36_w600.jpeg"
          imageAlt="Yamato"
          price="$3,999.00"
          url="http://www.ota-houston1.com/store/p121/OSAKI_OS-4D_PRO_MAESTRO_LE_.html#/"
        />
        <MassageChair
          name="Inada Lupimus Robo (Ivory) "
          image={inadaImage}
          imageAlt="Lupimus"
          price="$19,999.00"
          url=""
        />
      </div>
    </div>
  );
};

export default MassageChairPage;
