import '../usercard/style.css'

import { Card, Col, Row } from 'antd'
import React, { Fragment, useState } from 'react';

import {EnvironmentOutlined} from '@ant-design/icons';
import ModalApp from '../modal'

const UserCard = (props) => {
  const [show,setShow] = useState(false)

  const handleClick=()=>{
    setShow(true)
  }

  return (

    <div style={{textAlign:"left",cursor:"pointer"}}>
      <Card style={{width:"300px",height:"400px"}}  
      onClick={handleClick}
      bordered={false} title={props.id} 
      className="appCard" 
      cover={<img src={props.avatar}/>}>
          <Fragment>
            <div>{props.name}</div>
            <div><EnvironmentOutlined style={{width:"10px"}}/> {props.address}</div>
          </Fragment>
      </Card>
      {show && <ModalApp activity={props.user} id={props.id} name={props.name} address={props.address}/>}
    </div>
  );
};

export default UserCard;