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

class UpdateProfile extends Component {
  render() {
    return (
      <>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label sm={2}>Name</Label>
                    <Colxx sm={10}>
                      <Input type="text" defaultValue="Mr. Admin" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>Email</Label>
                    <Colxx sm={10}>
                      <Input type="email" defaultValue="admin@example.com" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}></Label>
                    <Colxx sm={10}>
                      <Button color="primary">Update Profile</Button>
                    </Colxx>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            <br />
            <br />
            <Card>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label sm={2}>Current Password</Label>
                    <Colxx sm={10}>
                      <Input type="password" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>New Password</Label>
                    <Colxx sm={10}>
                      <Input type="password" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}>Confirm New Password</Label>
                    <Colxx sm={10}>
                      <Input type="password" />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={2}></Label>
                    <Colxx sm={10}>
                      <Button color="primary">Update Password</Button>
                    </Colxx>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </>
    );
  }
}

export default UpdateProfile;
