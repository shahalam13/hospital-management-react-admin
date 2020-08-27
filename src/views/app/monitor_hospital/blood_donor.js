import React, { useState } from 'react';
import { Row, Card, CardTitle, CardBody, Table } from 'reactstrap';
import { Colxx, Separator } from '.././../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import DataTable from '../../../components/data_table/DataTable';

const tableDataObjects = [
  {
    id: 1,
    name: 'Jhon',
    age: '26',
    gender: 'Male',
    blood_group: 'A+',
    last_donation: '11.23.2019',
  },
  {
    id: 2,
    name: 'Mili',
    age: '34',
    gender: 'Female',
    blood_group: 'O+',
    last_donation: '07.09.2019',
  },
];

const BloodDonor = ({ match }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Age',
        accessor: 'age',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Blood Group',
        accessor: 'blodd_group',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Last Donation',
        accessor: 'last_donation',
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
                <h2>Blood Donor</h2>
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
