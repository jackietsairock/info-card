import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Card extends Component {
  render() {
    return (
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" className="p-3">
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Card;
