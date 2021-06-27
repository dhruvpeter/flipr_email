import React from "react";
import { Alert } from "react-bootstrap";
import "./AlertSuccess.css"
export default function AlertSuccess() {
  return (
    <div>
      <Alert variant="success" className="alert">
        Email Sent Successfully
        <br />
        <Alert.Link href="">Go to Home</Alert.Link>
      </Alert>
    </div>
  );
}
