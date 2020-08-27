import React, { useState } from 'react';
import { Row, Card, CardBody, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import AddNurse from './add';

const tableDataObjects = [
  {
    name: 'Jhon Doe',
    email: 'jhon@gmail.com',
    phone: '+612-92-1385682',
    address: 'N/A',
  },
  {
    name: 'Elliyot Gray',
    email: 'gray@gmail.com',
    phone: '+612-46-1385638',
    address: 'N/A',
  },
];

const NurseList = ({ match }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Nurse" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      {visible ? (
        <span>
          <AddNurse cancelAdd={() => setVisible(!visible)} />
        </span>
      ) : null}

      {!visible ? (
        <span>
          <Row className="mb-5">
            <Colxx xxs="12">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4">List Nurse</h3>
                <button
                  onClick={() => setVisible(!visible)}
                  className="btn btn-primary"
                >
                  Add Nurse
                </button>
              </div>
              <br />
              <br />
            </Colxx>

            <Colxx xxs="12">
              <Card className="mb-4">
                <CardBody>
                  <Table hover bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
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
                          <td>{object.address}</td>
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
export default NurseList;
