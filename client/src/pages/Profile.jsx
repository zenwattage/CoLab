import React, { Fragment } from "react";
import Nav from "../components/Nav/index";
import Wrapper from "../components/Wrapper/index";
// import Row from "../components/Row/index";
// import Col from "../components/Col/index";
import Footer from "../components/Footer/index";

function Profile() {return (
  <Fragment>
      <Nav />
      <div>
      <Wrapper>
        {/* <Row> */}
          {/* <Col> */}
          <p>This will be the user's profile page</p>
          {/* </Col> */}
        {/* </Row> */}

        {/* RENDER COMPENENT INFORMATION HERE. */}
       
      </Wrapper>
      <Footer />
    </div>
  </Fragment>
);
}

export default Profile;
