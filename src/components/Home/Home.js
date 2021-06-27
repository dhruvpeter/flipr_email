import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Home.css";
export default function Home() {
  const mail = [
    {
      from: "from@gmail.com",
      to: "to@gmail.com, cc1@gmail.com, cc2@gmail.com",
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
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "monthly",
      count: 0,
      schedule: {
        date: "26",
        time: "19:37:00",
      },
    },
    {
      from: "from@gmail.com",
      to: "to@gmail.com, cc1@gmail.com, cc2@gmail.com",
      subject:
        "Subject of the mail-Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      body: "Body of mail",
      type: "yearly",
      count: 0,
      schedule: {
        date: "26",
        month: "6",
        time: "19:41:00",
      },
    },
  ];

  //Filtering mails based on count. if count>0, then it is already sent.
  //Only those mails are needed to be displayed
  //const home_mail = mail.filter((data, index) => data.count == 0);

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
            <th>To be sent on</th>
          </tr>
        </thead>
        <tbody>
          {mail.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.to}</td>
              <td colSpan="3">{data.subject}</td>
              <td>
                {(() => {
                  if (data.type == "weekly") {
                    return (
                      <div>
                        {data.schedule.day}
                        {",  "}
                        {data.schedule.time}
                      </div>
                    );
                  } else if (data.type == "monthly") {
                    return (
                      <div>
                        {data.schedule.date}
                        {",  "}
                        {data.schedule.time}
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        {data.schedule.date}
                        {"/"}
                        {data.schedule.month}
                        {",  "}
                        {data.schedule.time}
                      </div>
                    );
                  }
                })()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
