import React from "react";
import { Layout } from "../components";

const CreditsPage = ({ location }) => (
  <Layout title="Credits!" location={location}>
    <h2>Credits</h2>
    <p>Thanks to these lovely folk for their work:</p>
    <p>
      The “<a href="https://thenounproject.com/term/run/2975825/">Run</a>” icon
      used on the home page is by dewadesign from{" "}
      <a href="https://thenounproject.com">the Noun Project</a>.
    </p>
    <p>
      The “<a href="https://thenounproject.com/term/code/649125/">Code</a>” icon
      used on the home page is by MRFA from{" "}
      <a href="https://thenounproject.com">the Noun Project</a>.
    </p>
    <p>
      The “<a href="https://thenounproject.com/term/coffee/1351019/">Coffee</a>”
      icon used on the home page is by asianson.design from{" "}
      <a href="https://thenounproject.com">the Noun Project</a>.
    </p>
    <p>
      The “<a href="https://thenounproject.com/term/dog/1609899/">Dog</a>” icon
      used on the home page is by Maxim Kulikov from{" "}
      <a href="https://thenounproject.com">the Noun Project</a>.
    </p>
  </Layout>
);

export default CreditsPage;
