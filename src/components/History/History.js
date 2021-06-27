import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./History.css";
export default function History() {
  const mail = [
    {
      from: "from@gmail.com",
      recipients: ["to@gmail.com", "cc1@gmail.com", "cc2@gmail.com"],
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "weekly",
      count: 1,
    },
    {
      from: "from@gmail.com",
      recipients: ["to@gmail.com", "cc1@gmail.com", "cc2@gmail.com"],
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "monthly",
      count: 1,
    },
    {
      from: "from@gmail.com",
      recipients: ["to@gmail.com", "cc1@gmail.com", "cc2@gmail.com"],
      sentDate: "December 17, 2020 03:24:00",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "yearly",
      count: 1,
    },
    {
      from: "from@gmail.com",
      recipients: ["to@gmail.com", "cc1@gmail.com", "cc2@gmail.com"],
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
  //const history_mail = mail.filter((data, index) => data.count > 0);

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
              <td><a href="/selectedmailhistory"><button>{index + 1}</button></a></td>
              <td>
                {data.recipients.map((data, index) => (
                  <div key={index}>{data} </div>
                ))}
              </td>
              <td colSpan="3">{data.subject}</td>
              <td>{data.sentDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
