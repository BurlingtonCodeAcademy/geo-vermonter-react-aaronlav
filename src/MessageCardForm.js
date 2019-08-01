import React from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

const MessageCardForm = (props) => {
  return (
    <Card body className="guessing-game">
      <CardTitle>Welcome to GuessVT!</CardTitle>
      <CardText>Leave a message to guess the location!</CardText>
      {
        !props.sendingMessage && !props.sentMessage && props.haveUsersLocation ?
          <Form onSubmit={props.formSubmitted}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={props.valueChanged}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Guess</Label>
              <Input
                onChange={props.valueChanged}
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter your best guess." />
            </FormGroup>
            <Button type="cancel" color="danger" onClick={props.cancelMessage}>Cancel</Button> {' '}
            <Button type="submit" color="info" disabled={!props.formIsValid()}>Send</Button>
          </Form> :
          props.sendingMessage || !props.haveUsersLocation ? 
            <video
              autoPlay
              loop
              src="https://i.giphy.com/media/BCIRKxED2Y2JO/giphy.mp4"></video> :
            <CardText>Thanks for playing!</CardText>
      }
    </Card>
  );
};

export default MessageCardForm;