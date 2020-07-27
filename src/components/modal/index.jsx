import '../modal/style.css'

import { Button, Calendar, Col, Modal, Row } from 'antd';
import React, { Component } from 'react';
import moment,{Moment} from 'moment'

class ModalApp extends Component {
  state = {
    date: new Date(),
    visible: true,
    start:moment(),
    end:moment()
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  
  render() {    
    return (
      <div>
        <Modal
        style={{width:"500px"}}
          title={this.props.id}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
      <Row>
      <Col span={12}>
            <div>{this.props.name}</div>
            <div>{this.props.address}</div>
            <div style={{fontSize:"1.3rem"}}><b>Activity Time</b></div>
            {this.props.activity.map((date,key)=>(
                <div>
                <b>START - </b>{date.start_time}&nbsp;&nbsp;&nbsp;<b>END - </b>{date.end_time}
                
                </div>
            ))}
      </Col>
      <Col span={12}>
              <Calendar fullscreen={false}/>
      </Col>
       
        </Row>
        </Modal>
        
      </div>
    );
  }
}

export default ModalApp;