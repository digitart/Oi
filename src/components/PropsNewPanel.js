import React, { Component } from 'react';
import {Row, Col,  ControlLabel} from 'react-bootstrap';
import TinymceEditor from './TinymceEditor';
import PropsItem from './PropsItem';

export default class PropsEditPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }
  
  render() {
    const {data, content} = this.props;
    return (
      <form>
        <Row>
          <Col md={6}>
            <ControlLabel>Position & Scale</ControlLabel>
            <PropsItem attr={'x'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem attr={'y'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem attr={'z'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem title={'Scale'}
                       attr={'scale'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
          </Col>
          <Col md={6}>
            <ControlLabel>Rotation</ControlLabel>
            <PropsItem title={'x'} 
                       attr={'rotateY'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem title={'y'} 
                       attr={'rotateX'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem title={'z'} 
                       attr={'rotateZ'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className='oi-tinymce-editor'>
              <ControlLabel>Content</ControlLabel>
              <TinymceEditor content={content}
                             onChange={this.handleChange.bind(this)}/>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}