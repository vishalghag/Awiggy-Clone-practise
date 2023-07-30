import { useState } from "react";

const Section = ({ title, aboutInstamart, isVisible, toggleSection }) => {
  const handleClick = () => {
    toggleSection(title);
  };

  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
      <div>
        {isVisible ? (
          <button
            className="rounded-full cursor-pointer bg-orange-400 p-2 m-2 box-border border border-black"
            onClick={handleClick}
          >
            Show Less
          </button>
        ) : (
          <button
            className="rounded-full cursor-pointer bg-red-400 p-2 m-2 box-border border border-black"
            onClick={handleClick}
          >
            Show More
          </button>
        )}
      </div>
      {isVisible && (
        <div>
          <h3>{aboutInstamart}</h3>
        </div>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("About Instamart");

  const toggleSection = (sectionTitle) => {
    setVisibleSection((prevSection) => {
      return prevSection === sectionTitle ? "" : sectionTitle;
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        aboutInstamart={`Welcome to our exquisite hotel, where luxury meets comfort. Immerse yourself in our elegant ambiance, impeccable service, and breathtaking views. Indulge in our meticulously designed rooms, equipped with modern amenities to enhance your stay. Delight your taste buds with exquisite cuisine at our fine dining restaurant. Whether you're here for business or leisure, our hotel promises an unforgettable experience, creating memories to cherish for a lifetime.`}
        isVisible={visibleSection === "About Instamart"}
        toggleSection={toggleSection}
      />

      <Section
        title={"Team Instamart"}
        aboutInstamart={`Meet our exceptional team of hospitality professionals dedicated to ensuring your stay exceeds your expectations. From our warm and knowledgeable front desk staff to our talented chefs and attentive housekeeping team, each member is committed to providing personalized service and creating a welcoming environment. We are here to make your experience at our hotel truly exceptional, leaving you with lasting memories and a desire to return.`}
        isVisible={visibleSection === "Team Instamart"}
        toggleSection={toggleSection}
      />

      <Section
        title={"Career Instamart"}
        aboutInstamart={`Join our dynamic and passionate team at our esteemed hotel, where endless opportunities await. We value talent, dedication, and a commitment to exceptional service. With a supportive work environment, ongoing training, and attractive benefits, we empower our employees to thrive and grow. Whether you aspire to be a chef, front desk manager, or part of our housekeeping team, we offer a rewarding career path in the vibrant world of hospitality.`}
        isVisible={visibleSection === "Career Instamart"}
        toggleSection={toggleSection}
      />
    </div>
  );
};

export default Instamart;
