import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { Colxx } from '../../components/common/CustomBootstrap';
import RadialProgressCard from '../../components/cards/RadialProgressCard';

const SortableStaticticsRow = ({ messages }) => {
  const [state, setState] = useState([
    {
      key: 1,
      title: '2 Doctors',
      percent: 5,
    },
    {
      key: 2,
      title: '5 Nurse',
      percent: 30,
    },
    {
      key: 3,
      title: '21 Patient',
      percent: 56,
    },
    {
      key: 4,
      title: '1 Pharmacist',
      percent: 61,
    },
    {
      key: 5,
      title: '3 Laboratorst',
      percent: 90,
    },
    {
      key: 6,
      title: '4 Accountant',
      percent: 100,
    },
    {
      key: 7,
      title: '0 Payment',
      percent: 0,
    },
    {
      key: 8,
      title: '0 Medicine',
      percent: 0,
    },
  ]);

  return (
    <ReactSortable
      list={state}
      setList={setState}
      options={{ handle: '.handle' }}
      className="row"
    >
      {state.map((x) => {
        return (
          <Colxx xl="3" lg="6" className="mb-4" key={x.key}>
            <RadialProgressCard
              title={x.title}
              percent={x.percent}
              isSortable
            />
          </Colxx>
        );
      })}
    </ReactSortable>
  );
};
export default SortableStaticticsRow;
