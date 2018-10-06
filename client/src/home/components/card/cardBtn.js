import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <Card className="card1">
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
            <CardText>{props.text}</CardText>
            <Button>{props.buttonText}</Button>
        </CardBody>
    </Card>
  );
};

export default Example;