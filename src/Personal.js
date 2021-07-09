import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Personal extends Component {
    render() {
        return (
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" className="p-3">
                        <Presonal data1={jackieInfo} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12" className="p-3">
                        <Card data2={jackieInfo}></Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Personal;