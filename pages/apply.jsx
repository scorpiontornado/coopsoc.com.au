import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";

const Apply = () => {

    return (
        <>
            <Head>
                <title>Apply | UNSW Co-op Society</title>
            </Head>

            <section className="section section-lg">
                <Row className="justify-content-center text-center">
                    <Col lg="8">
                        <h1 className="animate__animated animate__zoomIn animate__fast">SUBCOMMITTEE APPLICATION</h1>
                    </Col>
                </Row>
            </section>

            <Container fluid={true}>
                <section className="d-flex justify-content-center">
                    <iframe className="d-flex" src="https://docs.google.com/forms/d/e/1FAIpQLSdEmkN_OPUCpdJ2wNTNoDGamcoNhmv4IuEHEOPmk8rt9lIslg/viewform?embedded=true" width="640" height="2290">Loading…</iframe>
                </section>
            </Container>
        </>
    )
}

export default Apply;