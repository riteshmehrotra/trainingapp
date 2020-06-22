import React, { useState } from 'react';
import { Container, Row, Nav, Col, Card} from 'react-bootstrap';
import LanguageBar from './languagebar';
import Welcome from './welcome';
import { languageProvider } from './languageProvider';


const HomePage = (props) => {
    const { user } = props;
    let [language, setLanguage] = useState();
    return (
        <Container>
            <Row>
                <Nav className="ml-auto">
                    <LanguageBar languages={languageProvider.getCodes()} onChange={(lang) => setLanguage(lang)}></LanguageBar>
                </Nav>
            </Row>
            <Row>
                <Col lg={true}>
                    <Card>
                        <Card.Header>
                            <Welcome language={language}>{user}</Welcome>
                        </Card.Header>
                        <Card.Body>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )

}

export default HomePage;