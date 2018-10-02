import * as React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { connect } from 'react-redux';
import { CardHeader, Col, CustomInput, Form, FormGroup, Container } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Card from 'reactstrap/lib/Card';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Row from 'reactstrap/lib/Row';

class AddSkillsComponent extends React.Component<any, {}> {

    public render() {

        return (
            <>
                <Form>
                    <Container>
                        <Row>
                            <Col className="border-col-right pr-5">
                                <FormGroup row>
                                    <Label for="associateId" className="font-weight-bold" lg={4}>ASSOCIATE ID</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="associateId" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="associateName" className="font-weight-bold" lg={4}>ASSOCIATE NAME</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="associateName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="aopCertified" lg={4} className="font-weight-bold">AOP CERTIFIED</Label>
                                    <Col lg={8}>
                                        <CustomInput type="radio" id="aop-certified-yes" name="aopCertified" className="d-inline-block pr-4" label="YES" required />
                                        <CustomInput type="radio" id="aop-certified-no" name="aopCertified" className="d-inline-block" label="NO" required />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="skillsGroup" lg={4} className="font-weight-bold">SKILLS - GROUP</Label>
                                    <Col lg={8}>
                                        <Row>
                                            <Col lg={4}>
                                                <CustomInput type="checkbox" id="skills-group-ui-dev" name="skillsGroup" className="pr-4" label="UI/Dev" required />
                                                <CustomInput type="checkbox" id="skills-group-wcm" name="skillsGroup" className="pr-4" label="WCM" required />
                                            </Col>
                                            <Col lg={4}>
                                                <CustomInput type="checkbox" id="skills-group-mobility" name="skillsGroup" className="pr-4" label="Mobility" required />
                                                <CustomInput type="checkbox" id="skills-group-design" name="skillsGroup" className="pr-4" label="Design" required />
                                            </Col>
                                            <Col lg={4}>
                                                <CustomInput type="checkbox" id="skills-group-fullstack" name="skillsGroup" className="pr-4" label="Fullstack" required />
                                                <CustomInput type="checkbox" id="skills-group-ecm-ccm" name="skillsGroup" className="" label="ECM/CCM" required />
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col lg={{ size: 8, offset: 4 }}>
                                            <Card>
                                                <CardHeader>
                                                    <Row>
                                                        {['iOS', 'Android', 'React Native'].map((each, index) => {
                                                            return (
                                                                <Col key={index} lg={4}>
                                                                    <CustomInput type="checkbox" id={"skills-group-fullstack" + each} name="skills" className="pr-4" label={each} required />
                                                                </Col>
                                                            )
                                                        })}
                                                    </Row>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">CERTIFICATIONS, IF ANY</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="certifications" id="" />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold"> CUSTOMER NAME</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="customerName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">PROJECT ID</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="projectId" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold"> PROJECT NAME</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="projectName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">GRADE</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="grade" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">COMPETENCY TAGGING</Label>
                                    <Col lg={8}>
                                        <Input type="select" name="competencyTagging" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">DURATION</Label>
                                    <Col lg={8}>
                                        <Row>
                                            <Col lg={5}>
                                                <Input type="date" name="duration" id="inputDateFrom" />
                                            </Col>
                                            <Col lg={2}>
                                                <span className="px-2">To</span>
                                            </Col>
                                            <Col lg={5}>
                                                <Input type="date" name="duration" id="inputDateTo" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">HCM SUPERVISOR ID</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="supervisorId" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">HCM SUPERVISOR NAME</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="supervisorName" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">LOCATION</Label>
                                    <Col lg={8}>
                                        <Input type="text" name="location" id="" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="" lg={4} className="font-weight-bold">ATTACHMENTS (RESUME)</Label>
                                    <Col lg={8}>
                                        <Input type="file" name="attachments" id="" />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Container>
                            <Row>
                                <Button color="secondary" className="ml-auto px-4" disabled><small>CANCEL</small></Button>
                                <Button color="secondary" className="ml-4 px-3"><IoMdAddCircleOutline /><small className="ml-2">ADD USER</small></Button>
                            </Row>
                        </Container>
                    </Container>
                </Form>
            </>
        );
    }
}

export default connect()(AddSkillsComponent);