import React, { useState } from 'react';
import { Row, Card, CardTitle, CardBody, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import DataTable from '../../../components/data_table/DataTable';

const tableDataObjects = [
  {
    id: 1,
    blood_group: 'A+',
    status: '50 Bags',
  },
  {
    id: 2,
    blood_group: 'A-',
    status: '0 Bags',
  },
];

const BloodBank = ({ match }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Blood Group',
        accessor: 'blood_group',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
    ],
    []
  );

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.tables" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row className="mb-5">
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <h2>Blood Bank</h2>
              </CardTitle>
              <DataTable columns={cols} data={tableDataObjects} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default BloodBank;
