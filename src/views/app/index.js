import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const DashboardDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './dashboards/default')
);
const ListDepartment = React.lazy(() =>
  import(/* webpackChunkName: "department-list" */ './department')
);
const ListDoctor = React.lazy(() =>
  import(/* webpackChunkName: "doctor-list" */ './dortors')
);

const ListPatient = React.lazy(() =>
  import(/* webpackChunkName: "doctor-list" */ './patient')
);

const ListNurse = React.lazy(() =>
  import(/* webpackChunkName: "nurse-list" */ './nurse')
);

const ListPharmacist = React.lazy(() =>
  import(/* webpackChunkName: "pharmacist-list" */ './pharmacist')
);

const ListLaboratorist = React.lazy(() =>
  import(/* webpackChunkName: "laboratorist-list" */ './laboratorist')
);

const ListAccountant = React.lazy(() =>
  import(/* webpackChunkName: "accountant-list" */ './accountant')
);
const ListReceptionist = React.lazy(() =>
  import(/* webpackChunkName: "accountant-list" */ './receptionist')
);

const PaymentHistory = React.lazy(() =>
  import(
    /* webpackChunkName: "history-list" */ './monitor_hospital/payment_history'
  )
);

const BedAllotment = React.lazy(() =>
  import(
    /* webpackChunkName: "allotment-list" */ './monitor_hospital/bed_allotment'
  )
);

const BloodBank = React.lazy(() =>
  import(/* webpackChunkName: "bank-list" */ './monitor_hospital/blood_bank')
);

const BloodDonor = React.lazy(() =>
  import(/* webpackChunkName: "blood-list" */ './monitor_hospital/blood_donor')
);

const DeathDonor = React.lazy(() =>
  import(/* webpackChunkName: "death-list" */ './monitor_hospital/death_report')
);

const NoticeList = React.lazy(() =>
  import(/* webpackChunkName: "notice-list" */ './notice')
);

const Settings = React.lazy(() =>
  import(/* webpackChunkName: "settings" */ './settings')
);

const AccountSettings = React.lazy(() =>
  import(/* webpackChunkName: "settings" */ './account')
);

const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <DashboardDefault {...props} />}
            />
            <Route
              path={`${match.url}/list-department`}
              render={(props) => <ListDepartment {...props} />}
            />
            <Route
              path={`${match.url}/list-doctor`}
              render={(props) => <ListDoctor {...props} />}
            />
            <Route
              path={`${match.url}/list-patient`}
              render={(props) => <ListPatient {...props} />}
            />
            <Route
              path={`${match.url}/list-nurse`}
              render={(props) => <ListNurse {...props} />}
            />
            <Route
              path={`${match.url}/list-pharmacist`}
              render={(props) => <ListPharmacist {...props} />}
            />

            <Route
              path={`${match.url}/list-laboratorist`}
              render={(props) => <ListLaboratorist {...props} />}
            />
            <Route
              path={`${match.url}/list-accountant`}
              render={(props) => <ListAccountant {...props} />}
            />
            <Route
              path={`${match.url}/list-receptionist`}
              render={(props) => <ListReceptionist {...props} />}
            />

            <Route
              path={`${match.url}/payment-history`}
              render={(props) => <PaymentHistory {...props} />}
            />

            <Route
              path={`${match.url}/bed-allotment`}
              render={(props) => <BedAllotment {...props} />}
            />

            <Route
              path={`${match.url}/blood-bank`}
              render={(props) => <BloodBank {...props} />}
            />

            <Route
              path={`${match.url}/blood-donor`}
              render={(props) => <BloodDonor {...props} />}
            />
            <Route
              path={`${match.url}/death-report`}
              render={(props) => <DeathDonor {...props} />}
            />

            <Route
              path={`${match.url}/list-notice`}
              render={(props) => <NoticeList {...props} />}
            />

            <Route
              path={`${match.url}/settings`}
              render={(props) => <Settings {...props} />}
            />

            <Route
              path={`${match.url}/account-settings`}
              render={(props) => <AccountSettings {...props} />}
            />

            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
