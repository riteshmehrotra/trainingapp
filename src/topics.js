
import React, { useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import TopicInfo from './topicinfo';

const Topics = (props) => {
    let { list } = props;
    let topics = list.map(topic =>
        <Card border="primary" key={topic.name}>
            <Card.Header>{topic.name}</Card.Header>
            <Card.Body>{topic.description}</Card.Body>
            <Card.Footer>
                <a target="_blank" href={topic.link} >More info</a>
            </Card.Footer>
        </Card>);
    return <CardDeck>{topics}</CardDeck>;
}

export default Topics;