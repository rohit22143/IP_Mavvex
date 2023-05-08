import React, { useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";
const Card = (props) => <div className="contact-card">{props.children}</div>;

const Form = (props) => <form className="form">{props.children}</form>;

const TextInput = (props) => (
  <div className="text-input">
    <label className={"label-focus"} htmlFor={props.name}>
      {props.label}
    </label>
    <input type="text" name={props.name} />
  </div>
);

const TextArea = (props) => (
  <div className="text-area">
    <label className={"label-focus"} htmlFor={props.name}>
      {props.label}
    </label>
    <textarea name={props.name} />
  </div>
);

// const Button = (props) => <button className="button">{props.children}</button>;

export const App = () => {
  return (
    <div className="contact-container">
      <Card>
        <h1>Contact Us !</h1>
        <Typography  className="contact-subtitle" variant="body2">
        Join leading AI teams to accelerate access to your data, tell us about your project, ask a question or book a 1:1 with us to get started now!

        </Typography>
        <Form>
          <TextInput name="firstName" label="First Name" />
          <TextInput name="lastName" label="Last Name" />
          <TextInput name="email" label="Email" />
          <TextInput name="organization" label="Organization" />
          <TextArea name="message" label="Message" />
          <Button variant="contained">Send Message</Button>
        </Form>
      </Card>
    </div>
  );
};

export default App;
