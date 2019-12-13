import React, { Component } from "react";
import { printMsg, emitMsg } from "./service/socket";

export default class App extends Component {
  state = {
    userMsgPrint: "",
    userMsgSend: ""
  };

  componentDidMount() {
    printMsg(userMsgPrint => {
      this.setState({
        userMsgPrint
      });
    });
    emitMsg(message => ({ message }));
  }

  inputChange = e => {
    this.setState({
      userMsgSend: e.target.value
    });
  };

  buttonChange = () => {
    printMsg(this.state.userMsgPrint);
  };

  render() {
    return (
      <div>
        <h1>chat room</h1>
        <input onChange={this.inputChange} />
        <button onClick={this.buttonChange}>clic</button>
        <p>your message {this.state.userMsgSend}</p>
      </div>
    );
  }
}
