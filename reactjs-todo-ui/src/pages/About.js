import { Typography } from "@material-ui/core";
import React from "react";

function About(props) {
  return (
    <div>
      <Typography variant="h3" color="primary">
        About
      </Typography>
      <Typography variant="body1">
        This is just fun project to test reactjs, Nodejs and AWS Dynamodb.
      </Typography>
    </div>
  );
}

export default About;
