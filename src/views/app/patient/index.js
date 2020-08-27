import React, { useState } from 'react';
import { Row, Card, CardBody, CardTitle, Table } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import AddPatient from './add';

const tableDataObjects = [
  {
    name: 'Jhon Doe',
    email: 'jhon@gmail.com',
    phone: '+612-92-1385682',
    gender: 'Male',
    birth_date: '08/10/1990',
    age: '28',
    blood_group: 'B+',
  },
  {
    name: 'Elliyot Gray',
    email: 'gray@gmail.com',
    phone: '+612-46-1385638',
    gender: 'Female',
    birth_date: '09/13/2004',
    age: '16',
    blood_group: 'O-',
  },
];

const TablesUi = ({ match }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Patient" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      {visible ? (
        <span>
          <AddPatient cancelAdd={() => setVisible(!visible)} />
        </span>
      ) : null}

      {!visible ? (
        <span>
          <Row className="mb-5">
            <Colxx xxs="12">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4">List Patient</h3>
                <button
                  onClick={() => setVisible(!visible)}
                  className="btn btn-primary"
                >
                  Add Patient
                </button>
              </div>
              <br />
              <br />
            </Colxx>

            <Colxx xxs="12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="table.bootstrap-hoverable" />
                  </CardTitle>
                  <Table hover bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Blood Group</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableDataObjects.map((object, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{object.name}</td>
                          <td>{object.email}</td>
                          <td>{object.phone}</td>
                          <td>{object.gender}</td>
                          <td>{object.birth_date}</td>
                          <td>{object.blood_group}</td>
                          <td>
                            <span
                              style={{ cursor: 'pointer' }}
                              className="mdi mdi-eye"
                            ></span>
                            &nbsp;&nbsp;
                            <span
                              style={{ cursor: 'pointer' }}
                              className="mdi mdi-trash-can-outline"
                            ></span>
                            &nbsp;&nbsp;
                            <span
                              style={{ cursor: 'pointer' }}
                              className="mdi mdi-pencil-box-outline"
                            ></span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </span>
      ) : null}
    </>
  );
};
export default TablesUi;
