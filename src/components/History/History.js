import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./History.css"
export default function History() {
  const mail = [
    {
      from: "from@gmail.com",
      to: "to@gmail.com",
      cc: "cc1@gmail.com,cc2@gmail.com",
      sentDate: "8/3/2018",
      sentTime: "09:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
    },
    {
      from: "from@gmail.com",
      to: "to@gmail.com",
      cc: "cc1@gmail.com,cc2@gmail.com",
      sentDate: "8/3/2018",
      sentTime: "09:00",
      subject: "Subject of the mail",
      body: "Body of mail",
    },
  ];
  return (
    <div className="container-fluid">
      <h2 className="heading">History</h2>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>To</th>
            <th>Subject</th>
            <th></th>
            <th></th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {mail.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.to}</td>
              <td colSpan="3">{data.subject}</td>
              <td>{data.sentTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
