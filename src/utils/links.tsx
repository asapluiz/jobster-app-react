import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';


interface linksType{
  id:number;
  text: string;
  path:string;
  icon: JSX.Element
}
const links:linksType[] = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp  className="link-icon"/> },
  { id: 2, text: 'all jobs', path: 'alljobs', icon: <MdQueryStats className="link-icon"/> },
  { id: 3, text: 'add jobs', path: 'addjobs', icon: <FaWpforms className="link-icon"/> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile className="link-icon"/> },
]

export default links;



export const jobs =  [
  {
      "_id": "6251f00761280169d853b314",
      "company": "Bechtelar-Bednar",
      "position": "Civil Engineer",
      "status": "declined",
      "jobType": "internship",
      "jobLocation": "Kiamba",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-12-27T03:20:35.000Z",
      "updatedAt": "2021-12-27T03:20:35.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b304",
      "company": "Kunze and Sons",
      "position": "Accounting Assistant III",
      "status": "interview",
      "jobType": "remote",
      "jobLocation": "Kafr Mandā",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-12-22T11:20:44.000Z",
      "updatedAt": "2021-12-22T11:20:44.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b31e",
      "company": "Cremin LLC",
      "position": "Environmental Tech",
      "status": "declined",
      "jobType": "full-time",
      "jobLocation": "Meixian",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-12-10T00:41:19.000Z",
      "updatedAt": "2021-12-10T00:41:19.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b329",
      "company": "Klocko and Sons",
      "position": "Actuary",
      "status": "pending",
      "jobType": "full-time",
      "jobLocation": "Dianfang",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-12-08T18:33:34.000Z",
      "updatedAt": "2021-12-08T18:33:34.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b325",
      "company": "Mraz-Hilpert",
      "position": "Account Executive",
      "status": "pending",
      "jobType": "full-time",
      "jobLocation": "Kota Kinabalu",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-12-07T20:53:45.000Z",
      "updatedAt": "2021-12-07T20:53:45.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b2f4",
      "company": "Little LLC",
      "position": "Dental Hygienist",
      "status": "declined",
      "jobType": "remote",
      "jobLocation": "Rebrikha",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-11-23T06:27:19.000Z",
      "updatedAt": "2021-11-23T06:27:19.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b315",
      "company": "Barrows Inc",
      "position": "Graphic Designer",
      "status": "interview",
      "jobType": "internship",
      "jobLocation": "Baihua",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-11-22T08:24:08.000Z",
      "updatedAt": "2021-11-22T08:24:08.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b2f2",
      "company": "Schimmel, Beahan and Baumbach",
      "position": "Pharmacist",
      "status": "interview",
      "jobType": "internship",
      "jobLocation": "Jakhaly",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-10-21T07:03:27.000Z",
      "updatedAt": "2021-10-21T07:03:27.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b308",
      "company": "Stehr, Homenick and Turcotte",
      "position": "Assistant Professor",
      "status": "interview",
      "jobType": "full-time",
      "jobLocation": "Shizi",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-10-05T17:37:24.000Z",
      "updatedAt": "2021-10-05T17:37:24.000Z",
      "__v": 0
  },
  {
      "_id": "6251f00761280169d853b2f9",
      "company": "Fritsch-Muller",
      "position": "Desktop Support Technician",
      "status": "declined",
      "jobType": "remote",
      "jobLocation": "Kosai-shi",
      "createdBy": "6251efad2cfa7a2963501725",
      "createdAt": "2021-09-24T11:01:03.000Z",
      "updatedAt": "2021-09-24T11:01:03.000Z",
      "__v": 0
  }
]