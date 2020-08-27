import React, { Component } from 'react';
import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
} from 'reactstrap';

import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

import { Colxx } from '../../../components/common/CustomBootstrap';

class AddDepartment extends Component {
  render() {
    return (
      <>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <CardTitle>Add Department</CardTitle>
                  <button
                    className="btn btn-danger"
                    onClick={this.props.cancelAdd}
                  >
                    Cancel Add
                  </button>
                </div>
                <br />
                <br />
                <br />
                <Form>
                  <FormGroup row>
                    <Label sm={2}>Name</Label>
                    <Colxx sm={10}>
                      <Input type="text" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="passwordHorizontal" sm={2}>
                      Description
                    </Label>
                    <Colxx sm={10}>
                      <Input type="textarea" row="5" />
                    </Colxx>
                  </FormGroup>

                  <Button style={{ float: 'right' }} color="primary">
                    Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </>
    );
  }
}

export default AddDepartment;
