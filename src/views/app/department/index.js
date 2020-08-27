import React, { useState } from 'react';
import { Row, Card, CardBody, CardTitle, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import AddDepartment from './add';

const tableDataObjects = [
  { name: 'Anesthetics' },
  { name: 'Cardiology' },
  { name: 'Gastroenterology' },
];

const TablesUi = ({ match }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Department" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      {visible ? (
        <span>
          <AddDepartment cancelAdd={() => setVisible(!visible)} />
        </span>
      ) : null}

      {!visible ? (
        <span>
          <Row className="mb-5">
            <Colxx xxs="12">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4">List Department</h3>
                <button
                  onClick={() => setVisible(!visible)}
                  className="btn btn-primary"
                >
                  Add Department
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
                        <th width="70%">Description</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableDataObjects.map((object, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{object.name}</td>
                          <td>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believabl ...
                          </td>
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
