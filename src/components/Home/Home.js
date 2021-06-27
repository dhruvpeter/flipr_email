import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Home.css";
export default function Home() {
  const mail = [
    {
      from: "from@gmail.com",
      to: "to@gmail.com, cc1@gmail.com, cc2@gmail.com",
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "weekly",
      count: 0,
      schedule: {
        day: "Saturday",
        time: "19:29:00",
      },
    },
    {
      from: "from@gmail.com",
      to: "to@gmail.com, cc1@gmail.com, cc2@gmail.com",
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "monthly",
      count: 1,
      schedule: {
        date: "26",
        time: "19:37:00",
      },
    },
    {
      from: "from@gmail.com",
      to: "to@gmail.com, cc1@gmail.com, cc2@gmail.com",
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "yearly",
      count: 1,
      schedule: {
        date: "26",
        month: "6",
        time: "19:41:00",
      },
    },
    {
      from: "from@gmail.com",
      to: "to@gmail.com, cc1@gmail.com, cc2@gmail.com",
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "recurring",
      count: 10,
    },
  ];

  //Filtering mails based on count. if count>0, then it is already sent.
  //Only those mails are needed to be displayed
  const history_mail = mail.filter((data, index) => data.count > 0);

  return (
    <div className="container-fluid">
      <h2 className="heading">Home</h2>
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
          {history_mail.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.to}</td>
              <td colSpan="3">{data.subject}</td>
              <td>{data.sentDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
