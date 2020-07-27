import { Button, Card, Col, PageHeader, Row } from 'antd'
import React, { Component } from 'react';

import UserCard from '../../components/usercard';
import boy from '../assests/boy.jpg'
import girl from '../assests/girl.jpg'

class Home extends Component {
  state={
    users:[]
  }

  componentDidMount=()=>{
   fetch("https://6e4282c9-fc77-4bba-b1b7-9a7be4d165b0.mock.pstmn.io/users")
   .then((result)=>result.json())
   .then((result)=>this.setState({users:result.members}))
  }

  OnClickSortName=(event,sortKey)=>{
    const users = this.state.users;   
    users && users.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({users})
  }
  
  render() {

    return (
      <div>
      <PageHeader title="User List" extra={<div>
        <Button type="primary" onClick={e => this.OnClickSortName(e,'real_name')}>Sort by Name</Button>
        </div>}/>
      <Row style={{padding:"4%"}}>
      {this.state.users && this.state.users.map((users,key)=>(
        <>
        {console.log(users.activity_periods)}
        <Col span={8} style={{paddingBottom:"2%",display:"flex",justifyContent:"center"}} key={key}>
        <UserCard user={users.activity_periods} id={users.id} name={users.real_name} address={users.tz} avatar={users.gender==="female" ? girl:boy} />
        </Col>
        </>
      ))}
      </Row>
      </div>
    );
  }
}

export default Home;