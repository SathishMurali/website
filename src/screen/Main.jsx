import React from 'react'
import { Navbar, Nav, Row, Col, Image, Container, Card, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Main = () => {
    return (
        <>
            <div>
                <Navbar collapseOnSelect expand='sm'>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav className='ms-auto'>
                            <Nav.Item className='me-5'>
                                <Nav.Link href="#about" className=''>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='me-5'>
                                <Nav.Link href='#projects'>Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='me-5'>
                                <Nav.Link href='#internship'>Internships</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='me-5'>
                                <Nav.Link href={require('../assets/Resume.pdf')} target='_blank'>Resume</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col className='d-flex align-items-center justify-content-center flex-column mt-5'>
                            <h6 className='text-uppercase text-start'><span style={{ color: "grey" }}>Hey There !</span></h6>
                            <h2 className='text-uppercase'>I am <span style={{ color: "" }}>Sathish</span> Murali</h2>
                            <h6 className='text-uppercase fw-bold'><span style={{ color: "grey" }}>Associate Systems Analyst</span></h6>

                            <Container className='ms-auto'>
                                <SocialIcon className='me-2' bgColor='none' fgColor='#000000' url='https://www.linkedin.com/in/sathish-murali-255b3187' target={"_blank"}></SocialIcon>
                                <SocialIcon className='me-2' bgColor='none' fgColor='#000000' url='https://www.instagram.com/i_satmat/' target={"_blank"}></SocialIcon>
                                <SocialIcon className='me-2' bgColor='none' fgColor='#000000' url='https://www.facebook.com/sathish.murali22' target={"_blank"}></SocialIcon>
                                <SocialIcon className='me-2' bgColor='none' fgColor='#000000' url='https://github.com/SathishMurali/' target={"_blank"}></SocialIcon>
                                <SocialIcon className='me-2' bgColor='none' fgColor='#000000' url='https://wa.me/+918525898825?text=Hey,%20Mate!%20I%27m%20Contacting%20you%20from%20your%20Portfolio!' target="_blank" network='whatsapp'></SocialIcon>
                            </Container>
                        </Col>
                        <Col sm={true} style={{ background: "linear-gradient(22deg, rgba(32,191,85,1) 0%, rgba(1,186,239,1) 29%, rgba(128,255,128,1) 100%)", borderRadius: "600px 10px" }}>
                            <Image src={require('../assets/Image.png')} className='w-75 shadow' style={{backdropFilter: "blur(10px)"}}></Image>
                        </Col>
                    </Row>
                </Container>

                <br />
                <br />
                <br />

                <Nav.Link href='#about' style={{ width: "70px" }} className='mx-auto'>
                    <Image src={require('../assets/fast-forward.gif')} style={{ width: "60px", transform: "rotate(90deg)" }}></Image>
                </Nav.Link>

                <br />
                <br />

                <Container fluid>
                    <Row>
                        <Col style={{ background: "linear-gradient(22deg, rgba(32,191,85,1) 0%, rgba(1,186,239,1) 29%, rgba(128,255,128,1) 100%)", borderRadius: "10px 600px" }}>
                            <Image src={require('../assets/MyImage.png')} className='w-50 shadow' style={{backdropFilter: "blur(10px)"}}></Image>
                        </Col>
                        <Col sm={true}>
                            <h3 className='border-bottom border-danger w-25 mx-auto' href="#about" id='about'>About</h3>
                            <br />
                            <p style={{ textAlign: "justify", wordSpacing: "5px", fontSize: "20px", textIndent: "100px" }}>Successful graduation in Bachelor of Engineering in the stream of Computer
                                Science at SRM Valliammai Engineering College lead to have a chance of working
                                at NSEIT Limited as an Associate Systems Analyst to expose my skills and
                                furthermore improve into new technologies by utilizing the opportunities and to
                                make new connections.</p>
                        </Col>
                    </Row>
                </Container>

                <br />
                <br />
                <br />

                <Container fluid style={{ background: "linear-gradient(22deg, rgba(32,191,85,1) 0%, rgba(1,186,239,1) 29%, rgba(128,255,128,1) 100%)", borderRadius: "600px 10px" }}>
                    <h3 className='border-bottom border-danger w-25 mx-auto' id='projects'>Projects</h3>
                    <br />

                    <div className='w-xl-50 w-lg-50 w-sm-100 mx-auto'>
                        <Card className='mb-4 p-3 border-dark shadow' bg='transparent' style={{backdropFilter: "blur(10px)"}}>
                            <Card.Img className='w-25 mx-auto' src={require('../assets/Python.png')} />
                            <Card.Body>
                                <Card.Title>Graph Generator</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>This is a very simple activity. Created a GUI application to generate
                                    a analytical graph using statistical values.
                                </Card.Text>
                                <Button variant='outline-danger rounded-pill' href='https://github.com/SathishMurali/graph-generator' target='_blank'>More Info</Button>
                            </Card.Body>
                        </Card>

                        <Card className='p-3 border-dark shadow' bg='transparent' style={{backdropFilter: "blur(10px)"}}>
                            <Card.Img className='w-25 mx-auto' src={require('../assets/Java.png')} />
                            <Card.Body>
                                <Card.Title>Examination Platform</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    This is the projet made during my 1st month training in my first IT firm.
                                    This is the Java FSD Project.
                                </Card.Text>
                                <Button variant='outline-danger rounded-pill' href='https://github.com/SathishMurali/Dex' target='_blank'>More Info</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <br />
                </Container>

                <br />
                <br />
                <br />

                <Container fluid style={{ background: "linear-gradient(22deg, rgba(32,191,85,1) 0%, rgba(1,186,239,1) 29%, rgba(128,255,128,1) 100%)", borderRadius: "10px 600px" }}>
                    <h3 className='border-bottom border-danger w-25 mx-auto' id='internship'>Internships & Jobs</h3>
                    <br />


                    <div className='w-xl-50 w-lg-50 w-sm-100 mx-auto'>
                        <Card className='p-3 border-dark shadow' bg='transparent' style={{backdropFilter: "blur(10px)"}}>
                            <h5>Innnerwork Solutions Private Limited <span className='bg-danger'>(Virtual Internship)</span></h5>
                            <br />
                            <p style={{ textAlign: "justify" }}>Worked as a Trainee as <span className='text-warning'>PHP Developer</span> in Virtual Mode. They gathered a team to do a
                                project and I was one of the team. We have made a College Webpage Project using
                                Front-end and PHP as Backend. The duration of the internship was 2 months</p>
                        </Card>
                        <br />
                        <Card className='p-3 border-dark shadow' bg='transparent' style={{backdropFilter: "blur(10px)"}}>
                            <h5>NSEIT Limited <span className='bg-success'>(Present - Full Time)</span></h5>
                            <br />
                            <p style={{ textAlign: "justify" }}>Currently working as an <span className='text-warning'>Associate Systems Analyst</span>.
                                Have gone through 1 Month training in Java Full Stack Development and made a Demo Project
                                which was based on Examination Platform.</p>
                        </Card>
                    </div>
                </Container>
                <br />

                <footer className='bg-light p-2'>
                    <h5>Made by Myself with 🖤</h5>
                </footer>
            </div >
        </>
    )
}

export default Main