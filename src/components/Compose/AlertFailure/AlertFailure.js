import React from "react";
import { Alert } from "react-bootstrap";
import "../AlertSuccess/AlertSuccess.css";
export default function AlertFailure() {
  return (
    <div>
      <Alert variant="danger" className="alert">
        Error Sending Mail
        <br />
        <Alert.Link href="">Go to Home</Alert.Link>
      </Alert>
    </div>
  );
}
