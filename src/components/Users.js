import React, { Component } from "react";
import getUsers from "../services/getUsers";
import ProfileCard from "./ProfileCard";

class Users extends Component {
  state={
    members: []
  }
  componentDidMount= async()=>{
    const fetchUses= await getUsers();
    this.setState({
      members: fetchUses
    })
  }

  render() {
    return this.state.members.length !==0 ? this.state.members.map(u=>(<ProfileCard data={u} key={u.id} />)) : "Loading users..."
 }
}

export default Users;
