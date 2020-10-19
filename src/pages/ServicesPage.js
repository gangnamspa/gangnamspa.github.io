import React from 'react';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

const ServicesPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PageHeader content="Services"/>
      <PageSection title="Daily Massages">
        <div className="col s12">
          <h6>
            Massage involves the rubbing and manipulating of muscles, tendons, skin and
            ligaments. A full body massage using a technique that stimulates key points that
            are located in different areas of the human body. Acupressure is well known for
            their ability to relieve muscle tension and promote circulation of the body to
            aid healing. This pressure point massage uses the rolling of the fingers, palm,
            and elbow along the meridians with the aim of clearing blockages along these
            pressure points.
          </h6>
        </div>
      </PageSection>
      <hr/>
      <PageSection title="Foot Massages">
        <div className="col s12">
          <h6>
            Foot massage has been practiced in many cultures for centuries to promote health
            and well-being. Today, massage is considered a complementary and alternative
            medicine used by millions to relieve pain, reduce stress and anxiety,
            rehabilitate injuries and boost general health. The practice of foot reflexology
            massage involves applying pressure to specific points on the feet in order to
            affect various parts of the body.
          </h6>
        </div>
      </PageSection>
      <hr/>
      <PageSection title="Nail Art">
        <div className="col s12 l6">
          <h5>Manicure</h5>
          <h6>
            Relax, as your hands receive the most soothing massage treatment. Your hands
            will feel moisturized, your cuticles clean, and your nails absolutely beautiful.</h6>
        </div>
        <div className="col s12 l6">
          <h5>Gel Manicure</h5>
          <h6>
            Your treatment begins with your hands being cleansed and your cuticles prepped.
            Next, the newest innovation in nail care – a long-lasting Gel – will be applied
            in the color you selected. To add to the experience, you will receive a relaxing
            rub down on your arms using Korean based massage techniques. You will leave
            feeling and look polished – literally!</h6>
        </div>
        <div className="col s12 l6">
          <h5>Pedicure</h5>
          <h6>Sit back as your feet receive the care and pampering it deserves. Starting
            with a relaxing foot massage, you will leave with beautifully polished toenails
            and feet so light you can walk on air.</h6>
        </div>
        <div className="col s12 l6">
          <h5>Gel Pedicure</h5>
          <h6>Sit back as your feet receive the care and pampering it deserves. Starting
            with a relaxing foot massage, you will leave with beautifully polished toenails
            and feet so light you can walk on air.
          </h6>
        </div>
      </PageSection>

    </div>
  );
};

export default ServicesPage;