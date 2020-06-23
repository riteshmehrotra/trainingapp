import React, { useState, useEffect } from 'react';
import { Container, Row, Nav, Col, Card} from 'react-bootstrap';
import LanguageBar from './languagebar';
import Welcome from './welcome';
import { languageProvider } from './languageProvider';
import Topics from "./topics";
import TopicProvider from './topicProvider';


const HomePage = (props) => {
    const { user } = props;
    let [language, setLanguage] = useState();
    let [topics, setTopics] = useState([]);

    useEffect(()=>{
        let provider = new TopicProvider();
        provider.getTopics().then((response)=>{return response})
        .then((data)=>setTopics(data))
    });

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
                            <Topics list={topics}></Topics>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )

}



export default HomePage;