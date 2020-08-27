const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'Dashboard',
    to: '/app/dashboard',
    // subs: [
    //   {
    //     icon: 'simple-icon-briefcase',
    //     label: '',
    //     to: '/app/dashboards/default',
    //   },
    //   {
    //     icon: 'simple-icon-pie-chart',
    //     label: 'menu.analytics',
    //     to: '/app/dashboards/analytics',
    //   },
    //   {
    //     icon: 'simple-icon-basket-loaded',
    //     label: 'menu.ecommerce',
    //     to: '/app/dashboards/ecommerce',
    //   },
    //   {
    //     icon: 'simple-icon-doc',
    //     label: 'menu.content',
    //     to: '/app/dashboards/content',
    //   },
    // ],
  },
  {
    id: 'department',
    icon: 'iconsminds-three-arrow-fork',
    label: 'Department',
    to: '/app/list-department',
  },
  {
    id: 'doctor',
    icon: 'iconsminds-doctor',
    label: 'Doctor',
    to: '/app/list-doctor',
  },
  {
    id: 'patient',
    icon: 'iconsminds-user',
    label: 'Patient',
    to: '/app/list-patient',
  },
  {
    id: 'nurse',
    icon: 'iconsminds-female',
    label: 'Nurse',
    to: '/app/list-nurse',
  },
  {
    id: 'pharmacist',
    icon: 'iconsminds-medicine-3',
    label: 'Pharmacist',
    to: '/app/list-pharmacist',
  },
  {
    id: 'laboratorist',
    icon: 'iconsminds-office-lamp',
    label: 'Laboratorist',
    to: '/app/list-laboratorist',
  },
  {
    id: 'accountant',
    icon: 'iconsminds-money-bag',
    label: 'Accountant',
    to: '/app/list-accountant',
  },
  {
    id: 'receptionist',
    icon: 'iconsminds-handshake',
    label: 'Receptionist',
    to: '/app/list-receptionist',
  },
  {
    id: 'monitor_hospital',
    icon: 'iconsminds-digital-drawing',
    label: 'Monitor Hospital',
    to: '/app/pages',
    subs: [
      {
        id: 'pages-authorization',
        label: 'Monitor Hospital',
        to: '/user',
        subs: [
          {
            icon: 'iconsminds-arrow-right-2',
            label: 'Payment History',
            to: '/app/payment-history',
            newWindow: false,
          },
          {
            icon: 'iconsminds-arrow-right-2',
            label: 'Bed Allotment',
            to: '/app/bed-allotment',
            newWindow: false,
          },
          {
            icon: 'iconsminds-arrow-right-2',
            label: 'Blood Bank',
            to: '/app/blood-bank',
            newWindow: false,
          },
          {
            icon: 'iconsminds-arrow-right-2',
            label: 'Blood Donor',
            to: '/app/blood-donor',
            newWindow: false,
          },
          {
            icon: 'iconsminds-arrow-right-2',
            label: 'Death Report',
            to: '/app/death-report',
            newWindow: false,
          },
        ],
      },
    ],
  },
  {
    id: 'notice',
    icon: 'iconsminds-blackboard',
    label: 'Notice',
    to: '/app/list-notice',
  },
  {
    id: 'settings',
    icon: 'iconsminds-gears',
    label: 'Settings',
    to: '/app/settings',
  },
  {
    id: 'accountSettings',
    icon: 'iconsminds-male-2',
    label: 'Account Settings',
    to: '/app/account-settings',
  },
];
export default data;
