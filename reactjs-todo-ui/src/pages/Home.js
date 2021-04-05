import React from "react";
import { Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Typography variant="h3" color="primary">
        Home
      </Typography>
      <Typography variant="body1">
        This is just a Todo application that use a Nodejs web api and AWS
        DynamoDb.
      </Typography>

      <Typography variant="body1">
        Please don't forget to run Nodejs web api project to test.
      </Typography>
      <Typography variant="body1">
        process.env.NODE_ENV = {process.env.NODE_ENV}
        <br />
        process.env.REACT_APP_TODO_API__BASEURL=
        {process.env.REACT_APP_TODO_API_BASEURL}
        <br />
        process.env.REACT_APP_SECRET_VALUE={process.env.REACT_APP_SECRET_VALUE}
      </Typography>
    </div>
  );
}
