import React, { Component } from 'react';
import {
  Row,
  Card,
  CardBody,
  Input,
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

import DropzoneExample from '../../../containers/forms/DropzoneExample';

import { Colxx } from '../../../components/common/CustomBootstrap';

class AddDepartment extends Component {
  render() {
    return (
      <>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label sm={2}>System Name</Label>
                    <Colxx sm={10}>
                      <Input type="text" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>System Title</Label>
                    <Colxx sm={10}>
                      <Input type="text" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>Address</Label>
                    <Colxx sm={10}>
                      <Input type="text" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>Phone</Label>
                    <Colxx sm={10}>
                      <Input type="tel" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>Currency</Label>
                    <Colxx sm={10}>
                      <Input type="text" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>System Email</Label>
                    <Colxx sm={10}>
                      <Input type="email" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>System Email</Label>
                    <Colxx sm={10}>
                      <Input type="email" />
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
