import React from "react";
import { Badge } from "react-bootstrap";
import "./SelectedMailHome.css";
export default function SelectedMailHome() {
  const mail = {
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
  };
  return (
    <div className="container-fluid">
      <div className="subject">
        <h4>{mail.subject}</h4>
        <Badge pill bg="primary" className="type">
          {mail.type}
        </Badge>
      </div>

      <hr />
      <div className="from">
        <h6>From: </h6>
        {mail.from}
      </div>
      <br />
      <div className="to">
        <h6>To: </h6>
        {mail.to}
      </div>
      <br />
      <div className="to">
        <div className="date">
          <h6>To Be Sent On:</h6>
          {(() => {
            if (mail.type == "weekly") {
              return (
                <div>
                  {mail.schedule.day}
                  {",  "}
                  {mail.schedule.time}
                </div>
              );
            } else if (mail.type == "monthly") {
              return (
                <div>
                  {mail.schedule.date}
                  {",  "}
                  {mail.schedule.time}
                </div>
              );
            } else {
              return (
                <div>
                  {mail.schedule.date}
                  {"/"}
                  {mail.schedule.month}
                  {",  "}
                  {mail.schedule.time}
                </div>
              );
            }
          })()}
        </div>
      </div>

      <hr />
      <div className="body">{mail.body}</div>
    </div>
  );
}
