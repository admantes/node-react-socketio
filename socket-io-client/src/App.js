import React, { Component } from "react";
import socketIOClient from "socket.io-client";
 
 const endpoint  ="http://127.0.0.1:4001";
    const socket = socketIOClient(endpoint);
	
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
   
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  
  clickMe = (e)=>{
	socket.emit("message", "Hi from React App");
  }
  
  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature in Subic is: { ( (response-32)*(5/9) ).toFixed(2) } °C
              </p>
              : <p>Loading...</p>}
			  
  <button onClick={this.clickMe}>Submit Message</button>
        </div>
    );
  }
}
export default App;