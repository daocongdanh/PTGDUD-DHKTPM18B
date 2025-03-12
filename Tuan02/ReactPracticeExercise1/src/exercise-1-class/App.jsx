import React from "react";
import Contact from "./Contact";

class App123 extends React.Component {
  render() {
    const contactInfo = {
      firstName: "Chidi",
      lastName: "Anagonye",
      phone: "555-366-8987",
      address: "St. John's University, Sydney, Australia",
    };

    return (
      <div>
        <Contact
          firstName={contactInfo.firstName}
          lastName={contactInfo.lastName}
          phone={contactInfo.phone}
          address={contactInfo.address}
        />
      </div>
    );
  }
}

export default App123;
