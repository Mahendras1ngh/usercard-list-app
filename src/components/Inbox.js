import React, { Component } from "react";
import getMessages from "../services/getMessages";

class Inbox extends Component {
  state={
    messages: []
  }

  componentDidMount= async()=>{
    const fetchMessages= await getMessages();
    this.setState({
      messages: fetchMessages
    })
  }
 
  render() {
    return (
      <ul className="message-list">
       {
         this.state.messages.length !==0 ? this.state.messages.map(m=>(<li>{m.message}</li>)) : "Loading Messages..."
       }
      </ul>
    );
  }
}

export default Inbox;
