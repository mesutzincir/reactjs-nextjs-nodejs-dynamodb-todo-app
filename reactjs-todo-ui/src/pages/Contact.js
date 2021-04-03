import { Typography } from "@material-ui/core";
import React from "react";

function Contact(props) {
  return (
    <div>
      <Typography variant="h3" color="primary">
        Contact
      </Typography>
      Written by <a href="mailto:mz@example.com">Mesut Zincir</a>
    </div>
  );
}

export default Contact;
