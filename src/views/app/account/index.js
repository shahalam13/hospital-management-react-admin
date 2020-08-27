import React, { useState } from 'react';
import { Row, Card, CardBody, CardTitle, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import AddSettings from './add';

const tableDataObjects = [
  { name: 'Anesthetics' },
  { name: 'Cardiology' },
  { name: 'Gastroenterology' },
];

const Settings = ({ match }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Account" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <span>
        <Row className="mb-5">
          <Colxx xxs="12">
            <h3 className="mb-4">Manage Profile</h3>

            <br />
          </Colxx>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <AddSettings />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </span>
    </>
  );
};
export default Settings;
