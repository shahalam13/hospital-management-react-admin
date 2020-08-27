import React, { useState } from 'react';
import { Row, Card, CardTitle, CardBody, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import DataTable from '../../../components/data_table/DataTable';

const tableDataObjects = [
  {
    id: 1,
    bed_number: '01',
    bed_type: 'ICU',
    patient: 'Jhon Doe',
    allotment_time: '02/04/2018',
    discharge_time: '05/04/1018',
  },
  {
    id: 2,
    bed_number: '76',
    bed_type: 'Cabin',
    patient: 'Bill',
    allotment_time: '12/04/2018',
    discharge_time: '19/04/1018',
  },
];

const BedAllotment = ({ match }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Bed Number',
        accessor: 'bed_number',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Bed Type',
        accessor: 'bed_type',
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
        Header: 'Allotment Time',
        accessor: 'allotment_time',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Discharge Time',
        accessor: 'discharge_time',
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
                <h2>Bed Allotment</h2>
              </CardTitle>
              <DataTable columns={cols} data={tableDataObjects} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default BedAllotment;
