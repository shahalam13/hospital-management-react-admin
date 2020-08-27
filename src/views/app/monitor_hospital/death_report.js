import React, { useState } from 'react';
import { Row, Card, CardTitle, CardBody, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import DataTable from '../../../components/data_table/DataTable';

const tableDataObjects = [
  {
    id: 1,
    description: 'Tempor aliquip consectetur nulla irure.',
    date: '11.23.2019',
    patient: 'Charlie',
    dortor: 'Jhon',
  },
  {
    id: 2,
    description:
      'Irure nulla cupidatat do excepteur sit nisi commodo cupidatat.',
    date: '07.09.2019',
    patient: 'Connor',
    dortor: 'Rhys',
  },
];

const BloodDonor = ({ match }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Description',
        accessor: 'description',
        cellClass: 'text-muted w-50',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Date',
        accessor: 'date',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Patient',
        accessor: 'patient',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Doctor',
        accessor: 'dortor',
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
                <h2>Death Report</h2>
              </CardTitle>
              <DataTable columns={cols} data={tableDataObjects} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default BloodDonor;
