/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const getMenuTitle = (sub) => {
  // return <IntlMessages id={`menu.${sub}`} />;
  return sub;
};

const getUrl = (path, sub, index) => {
  if (index === 0) {
    return '';
  }
  return path.split(sub)[0] + sub;
};

const BreadcrumbContainer = ({ heading, match }) => {
  return (
    <span>
      {heading && (
        <NavLink to="dashboard">
          <span>Home</span>&nbsp;&nbsp; | &nbsp;&nbsp;
        </NavLink>
      )}
      <BreadcrumbItems match={match} />
      <br />
      <br />
    </span>
  );
};

const BreadcrumbItems = ({ match }) => {
  const path = match.path.substr(1);
  let paths = path.split('/');
  if (paths[paths.length - 1].indexOf(':') > -1) {
    paths = paths.filter((x) => x.indexOf(':') === -1);
  }
  return (
    <>
      {paths.map((sub, index) => {
        return (
          <span key={index}>
            {paths.length !== index + 1 ? null : getMenuTitle(sub)}
          </span>
        );
      })}
    </>
  );
};

export default BreadcrumbContainer;
