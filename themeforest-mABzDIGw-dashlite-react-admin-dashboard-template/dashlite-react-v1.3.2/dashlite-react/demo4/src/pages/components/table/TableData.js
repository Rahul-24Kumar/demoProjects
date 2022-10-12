import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/a-sm.jpg";
import User4 from "../../../images/avatar/d-sm.jpg";
import React from "react";
import { UserAvatar, Icon } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";

export const basicData = {
  header: ["#", "First", "Last"],
  data: [
    {
      id: "1",
      first: "Mark",
      last: "Otto",
    },
    {
      id: "2",
      first: "Jacob",
      last: "Thornton",
    },
    {
      id: "3",
      first: "Larry",
      last: "the bird",
    },
  ],
};


export const dataTableColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    hide: 370,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
    hide: "sm",
  },
  {
    name: "Company",
    selector: (row) => row.company,
    sortable: true,
    hide: "sm",
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
    hide: "md",
  },
  {
    name: "Salary",
    selector: (row) => row.salary,
    sortable: true,
    hide: "md",
  },
];

export const dataTableColumns2 = [
  {
    name: "User",
    selector: (row) => row.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.name}{" "}
            <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span>
          </span>
          <span>{row.email}</span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Balance",
    selector: (row) => row.balance,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        {row.balance} <span className="currency">USD</span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
    cell: (row) => <span>{row.phone}</span>,
    hide: "md",
  },
  {
    name: "Verified",
    selector: (row) => row.verified,
    sortable: true,
    minWidth: "170px",
    hide: "md",
    cell: (row) => (
      <ul className="list-status d-flex">
        <li>
          <Icon
            className={`text-${
              row.emailStatus === "success" ? "success" : row.emailStatus === "pending" ? "info" : "secondary"
            }`}
            name={`${
              row.emailStatus === "success"
                ? "check-circle"
                : row.emailStatus === "alert"
                ? "alert-circle"
                : "alarm-alt"
            }`}
          ></Icon>{" "}
          <span>Email</span>
        </li>
        <li>
          <Icon
            className={`text-${
              row.kycStatus === "success"
                ? "success"
                : row.kycStatus === "pending"
                ? "info"
                : row.kycStatus === "warning"
                ? "warning"
                : "secondary"
            }`}
            name={`${
              row.kycStatus === "success" ? "check-circle" : row.kycStatus === "pending" ? "alarm-alt" : "alert-circle"
            }`}
          ></Icon>{" "}
          <span>KYC</span>
        </li>
      </ul>
    ),
  },
  {
    name: "Last Login",
    selector: (row) => row.lastLogin,
    sortable: true,
    cell: (row) => <span>{row.lastLogin}</span>,
    hide: "lg",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "sm",
    cell: (row) => (
      <span
        className={`tb-status ml-1 text-${
          row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

export const DataTableData = [
  {
    id: 0,
    name: "Francine Kirby",
    age: 24,
    gender: "female",
    company: "BUZZWORKS",
    startDate: "2017-02-17",
    salary: "$2,570.39",
  },
  {
    id: 1,
    name: "Reva Best",
    age: 40,
    gender: "female",
    company: "MARQET",
    startDate: "2021-10-14",
    salary: "$1,488.76",
  },
  {
    id: 2,
    name: "Alexis Flores",
    age: 21,
    gender: "female",
    company: "OBONES",
    startDate: "2020-04-28",
    salary: "$1,336.93",
  },
  {
    id: 3,
    name: "Nixon Sullivan",
    age: 30,
    gender: "male",
    company: "SLUMBERIA",
    startDate: "2016-10-08",
    salary: "$2,156.70",
  },
  {
    id: 4,
    name: "Foreman Wooten",
    age: 20,
    gender: "male",
    company: "ESCENTA",
    startDate: "2018-07-12",
    salary: "$3,057.42",
  },
  {
    id: 5,
    name: "Franco Davis",
    age: 28,
    gender: "male",
    company: "ZILLACON",
    startDate: "2015-10-08",
    salary: "$2,730.88",
  },
  {
    id: 6,
    name: "Bullock Kline",
    age: 32,
    gender: "male",
    company: "SAVVY",
    startDate: "2017-07-03",
    salary: "$2,986.05",
  },
  {
    id: 7,
    name: "Baird Coffey",
    age: 36,
    gender: "male",
    company: "BLEENDOT",
    startDate: "2014-01-27",
    salary: "$2,755.80",
  },
  {
    id: 8,
    name: "Eula Walters",
    age: 40,
    gender: "female",
    company: "UXMOX",
    startDate: "2020-09-19",
    salary: "$3,302.75",
  },
  {
    id: 9,
    name: "Gaines Moss",
    age: 26,
    gender: "male",
    company: "INCUBUS",
    startDate: "2017-10-13",
    salary: "$3,856.24",
  },
  {
    id: 10,
    name: "Sargent Winters",
    age: 28,
    gender: "male",
    company: "AUSTEX",
    startDate: "2020-12-26",
    salary: "$3,668.64",
  },
  {
    id: 11,
    name: "Sybil Patton",
    age: 35,
    gender: "female",
    company: "ZILIDIUM",
    startDate: "2020-06-19",
    salary: "$1,987.14",
  },
  {
    id: 12,
    name: "Henderson Elliott",
    age: 39,
    gender: "male",
    company: "ZOARERE",
    startDate: "2016-08-16",
    salary: "$1,795.31",
  },
  {
    id: 13,
    name: "Combs Irwin",
    age: 33,
    gender: "male",
    company: "COLAIRE",
    startDate: "2017-07-19",
    salary: "$2,396.73",
  },
  {
    id: 14,
    name: "Fleming Buchanan",
    age: 33,
    gender: "male",
    company: "WEBIOTIC",
    startDate: "2021-09-12",
    salary: "$3,406.96",
  },
  {
    id: 15,
    name: "Mcbride Dixon",
    age: 25,
    gender: "male",
    company: "ZBOO",
    startDate: "2017-12-08",
    salary: "$1,065.32",
  },
  {
    id: 16,
    name: "Nettie Greer",
    age: 32,
    gender: "female",
    company: "QUONK",
    startDate: "2014-03-15",
    salary: "$1,558.83",
  },
  {
    id: 17,
    name: "Anita Saunders",
    age: 39,
    gender: "female",
    company: "IDEALIS",
    startDate: "2015-07-31",
    salary: "$1,848.84",
  },
  {
    id: 18,
    name: "Darcy Mcclain",
    age: 24,
    gender: "female",
    company: "DIGIGEN",
    startDate: "2020-02-19",
    salary: "$3,382.78",
  },
  {
    id: 19,
    name: "Jodi Knowles",
    age: 32,
    gender: "female",
    company: "KONGENE",
    startDate: "2014-03-09",
    salary: "$1,668.05",
  },
  {
    id: 20,
    name: "Cathleen Schroeder",
    age: 21,
    gender: "female",
    company: "TROPOLIS",
    startDate: "2014-09-28",
    salary: "$2,730.21",
  },
  {
    id: 21,
    name: "Lea Fitzgerald",
    age: 24,
    gender: "female",
    company: "AVENETRO",
    startDate: "2015-08-17",
    salary: "$2,547.85",
  },
  {
    id: 22,
    name: "Pitts Graham",
    age: 20,
    gender: "male",
    company: "MALATHION",
    startDate: "2020-05-08",
    salary: "$3,538.05",
  },
  {
    id: 23,
    name: "Lane Glass",
    age: 22,
    gender: "male",
    company: "NETROPIC",
    startDate: "2020-01-26",
    salary: "$1,141.42",
  },
  {
    id: 24,
    name: "Tisha Cleveland",
    age: 33,
    gender: "female",
    company: "YURTURE",
    startDate: "2020-01-11",
    salary: "$2,877.89",
  },
  {
    id: 25,
    name: "Ortiz Nguyen",
    age: 34,
    gender: "male",
    company: "TRIBALOG",
    startDate: "2019-07-09",
    salary: "$3,156.79",
  },
  {
    id: 26,
    name: "Katrina Alvarado",
    age: 33,
    gender: "female",
    company: "PYRAMIA",
    startDate: "2016-07-04",
    salary: "$2,273.02",
  },
  {
    id: 27,
    name: "Craig Chang",
    age: 30,
    gender: "male",
    company: "COMVEYER",
    startDate: "2019-09-08",
    salary: "$3,028.17",
  },
  {
    id: 28,
    name: "Joann Short",
    age: 30,
    gender: "female",
    company: "PRISMATIC",
    startDate: "2017-08-17",
    salary: "$2,041.14",
  },
  {
    id: 29,
    name: "Vargas Rivers",
    age: 23,
    gender: "male",
    company: "ELPRO",
    startDate: "2014-04-25",
    salary: "$1,906.04",
  },
  {
    id: 30,
    name: "Snow Hampton",
    age: 37,
    gender: "male",
    company: "SNORUS",
    startDate: "2014-11-30",
    salary: "$1,419.30",
  },
  {
    id: 31,
    name: "Ellison Pennington",
    age: 32,
    gender: "male",
    company: "APEX",
    startDate: "2020-02-06",
    salary: "$3,486.62",
  },
  {
    id: 32,
    name: "Kate Donaldson",
    age: 28,
    gender: "female",
    company: "TALENDULA",
    startDate: "2021-07-05",
    salary: "$3,025.63",
  },
  {
    id: 33,
    name: "Bridges Franco",
    age: 20,
    gender: "male",
    company: "FURNAFIX",
    startDate: "2021-09-21",
    salary: "$1,371.72",
  },
  {
    id: 34,
    name: "Montgomery Moreno",
    age: 24,
    gender: "male",
    company: "ZIORE",
    startDate: "2018-08-04",
    salary: "$1,016.90",
  },
  {
    id: 35,
    name: "Meyers Barnett",
    age: 25,
    gender: "male",
    company: "OCEANICA",
    startDate: "2017-03-04",
    salary: "$3,804.05",
  },
  {
    id: 36,
    name: "Gertrude Glenn",
    age: 29,
    gender: "female",
    company: "FORTEAN",
    startDate: "2018-04-19",
    salary: "$3,883.97",
  },
  {
    id: 37,
    name: "Wise Fitzpatrick",
    age: 34,
    gender: "male",
    company: "RODEOLOGY",
    startDate: "2017-11-08",
    salary: "$1,400.23",
  },
  {
    id: 38,
    name: "Joseph Leonard",
    age: 30,
    gender: "male",
    company: "QIMONK",
    startDate: "2014-12-01",
    salary: "$2,689.09",
  },
  {
    id: 39,
    name: "Booker Chambers",
    age: 24,
    gender: "male",
    company: "SKYPLEX",
    startDate: "2014-07-29",
    salary: "$3,949.05",
  },
  {
    id: 40,
    name: "Corrine Kerr",
    age: 35,
    gender: "female",
    company: "FIBEROX",
    startDate: "2019-06-07",
    salary: "$2,245.15",
  },
  {
    id: 41,
    name: "Williamson Daniel",
    age: 26,
    gender: "male",
    company: "GREEKER",
    startDate: "2020-09-15",
    salary: "$3,814.20",
  },
  {
    id: 42,
    name: "Anthony Oneill",
    age: 36,
    gender: "male",
    company: "MIXERS",
    startDate: "2020-07-22",
    salary: "$1,129.99",
  },
  {
    id: 43,
    name: "Marquita Hubbard",
    age: 25,
    gender: "female",
    company: "VELOS",
    startDate: "2015-11-19",
    salary: "$2,227.39",
  },
  {
    id: 44,
    name: "Dena Clements",
    age: 34,
    gender: "female",
    company: "ORBEAN",
    startDate: "2020-08-31",
    salary: "$2,689.21",
  },
  {
    id: 45,
    name: "Tia Curry",
    age: 37,
    gender: "female",
    company: "MUSAPHICS",
    startDate: "2019-04-02",
    salary: "$3,784.72",
  },
  {
    id: 46,
    name: "Rios House",
    age: 30,
    gender: "male",
    company: "IMPERIUM",
    startDate: "2015-08-23",
    salary: "$1,519.37",
  },
  {
    id: 47,
    name: "Whitfield Mcleod",
    age: 37,
    gender: "male",
    company: "SCHOOLIO",
    startDate: "2015-03-17",
    salary: "$2,365.21",
  },
  {
    id: 48,
    name: "Conrad Holt",
    age: 38,
    gender: "male",
    company: "MENBRAIN",
    startDate: "2020-02-01",
    salary: "$2,289.04",
  },
  {
    id: 49,
    name: "Mclaughlin Fletcher",
    age: 34,
    gender: "male",
    company: "SOLAREN",
    startDate: "2018-09-05",
    salary: "$1,115.62",
  },
];

export const userData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Abu Bin Ishtiyak",
    displayName: "Ishtiak",
    dob: "10 Aug, 1980",
    role: "Customer",
    checked: false,
    email: "info@softnio.com",
    balance: "35,040.34",
    phone: "818474958",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "10 Feb 2020",
    status: "Active",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    dob: "10 Sept, 1990",
    role: "Investor",
    email: "ashley@softnio.com",
    balance: "580.00",
    checked: false,
    phone: "1243941787",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "07 Feb 2020",
    status: "Pending",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    dob: "19 Jan, 1985",
    role: "Customer",
    email: "larson@example.com",
    balance: "32,000.34",
    checked: false,
    phone: "1686032320",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "04 Feb 2020",
    status: "Active",
    country: "England",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    dob: "24 April, 1985",
    role: "Subscriber",
    email: "jane84@example.com",
    balance: "0.00",
    checked: false,
    phone: "4392715360",
    emailStatus: "alert",
    kycStatus: "alert",
    lastLogin: "01 Feb 2020",
    status: "Suspend",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Frances Burns",
    dob: "30 May, 2000",
    role: "Manager",
    image: User,
    email: "frances@example.com",
    balance: "42.50",
    checked: false,
    phone: "6391303150",
    emailStatus: "pending",
    kycStatus: "error",
    lastLogin: "31 Jan 2020",
    status: "Active",
    country: "Bangladesh",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alan Butler",
    dob: "10 Feb, 1997",
    role: "Investor",
    image: User2,
    email: "butler@example.com",
    balance: "440.34",
    checked: false,
    phone: "9633091706",
    emailStatus: "pending",
    kycStatus: "warning",
    lastLogin: "18 Jan 2020",
    status: "Inactive",
    country: "India",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    dob: "02 May, 1993",
    role: "Investor",
    email: "victoria@example.com",
    balance: "59,400.68",
    checked: false,
    phone: "8119854846",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "15 Jan 2020",
    status: "Active",
    country: "China",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    dob: "15 Feb, 1997",
    role: "Customer",
    email: "patrick@example.com",
    balance: "30.00",
    checked: false,
    phone: "9422384474",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "08 Jan 2020",
    status: "Active",
    country: "India",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "Jane Harris",
    dob: "28 Feb, 1985",
    role: "Customer",
    image: User4,
    email: "harris@example.com",
    balance: "5,530.23",
    checked: false,
    phone: "1234472384",
    emailStatus: "pending",
    kycStatus: "pending",
    lastLogin: "02 Jan 2020",
    status: "Pending",
    country: "Vietnam",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "walker@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "lilja@example.com",
    balance: "105.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "pending",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Canada",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "hunter@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "25 Dec 2019",
    status: "Pending",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "sara@example.com",
    balance: "165.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "rejected",
    kycStatus: "pending",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Russia",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "kiana@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Suspend",
    country: "South Korea",
    designation: "Accountant",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 15,
    avatarBg: "pink",
    name: "Raymond Atkins",
    dob: "30 Dec, 1998",
    role: "Customer",
    image: User4,
    email: "sara@example.com",
    balance: "165.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "rejected",
    kycStatus: "pending",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Russia",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "amira@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Saudi Arabia",
    designation: "Lecturer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "steinar@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Pending",
    country: "Latvia",
    designation: "Accountant",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 18,
    avatarBg: "warning",
    name: "Joshua Mcnair",
    dob: "30 Dec, 1998",
    image: User4,
    role: "Admin",
    email: "joshua@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Suspend",
    country: "Ireland",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "asia@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "success",
    kycStatus: "success",
    lastLogin: "25 Dec 2019",
    status: "Active",
    country: "Latvia",
    designation: "Accountant",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "fox@example.com",
    balance: "55.00",
    checked: false,
    phone: "4634717173",
    emailStatus: "pending",
    kycStatus: "rejected",
    lastLogin: "25 Dec 2019",
    status: "Suspend",
    country: "Ireland",
    designation: "Web Developer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
];
