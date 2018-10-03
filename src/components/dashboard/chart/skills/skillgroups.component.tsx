import * as React from 'react';
import {Col, Container, Row, Card} from 'reactstrap';
import { Link } from 'react-router-dom';




export default class SkillGroupComponent extends React.Component {
    public render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3 style={{marginLeft: "20px"}}>Skill Group</h3>
                        </Col>
                        <Col md={6} style={{display: "flex", justifyContent: "flex-end"}}>
                            <Link to="" style={{marginRight: "30px"}}>View All</Link>
                        </Col>
                    </Row>
                    <div className="skillgroup-cards-container">
                        <Row>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">12</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">13</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">14</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">15</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "15px"}}>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">12</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">13</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">14</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">15</p>
                                        <p className="skill-card-name">Skill Name</p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>                    
                </Container>
            
            </div>
        )
    }

}
