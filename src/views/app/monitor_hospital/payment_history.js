import React, { useState } from 'react';
import { Row, Card, CardTitle, CardBody, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import DataTable from '../../../components/data_table/DataTable';

const tableDataObjects = [
  {
    id: 1,
    invoice: 'SK1244469',
    patient: 'Jhon Doe',
    creation_date: '01/02/2018',
    due_date: '02/04/2018',
    vat: '05%',
    discount: '10%',
    status: 'Due',
  },
  {
    id: 2,
    invoice: 'SK13223322',
    patient: 'Salzburger Nockerl',
    creation_date: '01/02/2019',
    due_date: '--',
    vat: '05%',
    discount: '10%',
    status: 'Paid',
  },
];

const PaymentHistories = ({ match }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Invoice Number',
        accessor: 'invoice',
        cellClass: 'text-muted w-30',
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
        Header: 'Creation Date',
        accessor: 'creation_date',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Due Date',
        accessor: 'due_date',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Vat Percentage',
        accessor: 'vat',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Discount Amount',
        accessor: 'discount',
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
                <h2>Payment History</h2>
              </CardTitle>
              <DataTable columns={cols} data={tableDataObjects} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default PaymentHistories;
