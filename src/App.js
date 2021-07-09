import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Card from "./Card";
import Presonal from "./Personal";
import jackieInfo from "./jackie-info.json";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            <Presonal data1={jackieInfo} />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            <Card data2={jackieInfo}></Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
