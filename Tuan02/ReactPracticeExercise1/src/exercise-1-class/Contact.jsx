import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <p>
          <strong>Tên:</strong> {this.props.firstName}
        </p>
        <p>
          <strong>Email:</strong> {this.props.lastName}
        </p>
        <p>
          <strong>Số điện thoại:</strong> {this.props.phone}
        </p>
        <p>
          <strong>Số điện thoại:</strong> {this.props.address}
        </p>
      </div>
    );
  }
}

export default Contact;
