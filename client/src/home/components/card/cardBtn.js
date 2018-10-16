import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Example extends React.Component {
  constructor (props) {
    super(props);

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    this.props.history.push(this.props.btnhref);
    console.log("I was clicked")};
  

  render() {
    return (
      <Card className="card1">
          <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
          <CardBody className="text-center">
              <CardTitle>{this.props.title}</CardTitle>
              <CardSubtitle>{this.props.subtitle}</CardSubtitle>
              <CardText>{this.props.text}</CardText>
              <Button onClick={this.routeChange}>{this.props.buttonText}</Button>
          </CardBody>
      </Card>
    );
  }

}

export default withRouter(Example);