// @flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {branches:  [
      {
        "BranchId": "AV",
        "Name": "Alta Vista",
        "ShortName": "Alta Vista",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_al_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "2516 Alta Vista",
        "ZipCode": "K1V 7T1",
        "Coordinates": {
          "Latitude": "45.37831700",
          "Longitude": "-75.66121100"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "BE",
        "Name": "Beaverbrook",
        "ShortName": "Beaverbrook",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/default/files/images/branches/Beaverbrook2014_308x180_0.png",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "10:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "2500 Campeau",
        "ZipCode": "K2K 2W3",
        "Coordinates": {
          "Latitude": "45.322052",
          "Longitude": "-75.895177"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "BH",
        "Name": "Blackburn Hamlet",
        "ShortName": "Blackburn Hamlet",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_bh_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "199 Glen Park",
        "ZipCode": "K1B 5B8",
        "Coordinates": {
          "Latitude": "45.42970500",
          "Longitude": "-75.56568100"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "CA",
        "Name": "Carlingwood",
        "ShortName": "Carlingwood",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ca_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "281 Woodroffe",
        "ZipCode": "K2A 3W4",
        "Coordinates": {
          "Latitude": "45.37367400",
          "Longitude": "-75.77221200"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "CP",
        "Name": "Carp",
        "ShortName": "Carp",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_cp_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "3911 Carp",
        "ZipCode": "K0A 1L0",
        "Coordinates": {
          "Latitude": "45.35249200",
          "Longitude": "-76.04463800"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "CE",
        "Name": "Centennial",
        "ShortName": "Centennial",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ce_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "3870 Old Richmond Rd.",
        "ZipCode": "K2H 5C4",
        "Coordinates": {
          "Latitude": "45.32148100",
          "Longitude": "-75.82628500"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "CB",
        "Name": "Constance Bay",
        "ShortName": "Constance Bay",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_cb_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "16:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": [
                "10:00",
                "16:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "16:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "262 Len Purcell",
        "ZipCode": "K0A 3M0",
        "Coordinates": {
          "Latitude": "45.49804500",
          "Longitude": "-76.09579300"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "CU",
        "Name": "Cumberland",
        "ShortName": "Cumberland",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_cu_ext_2_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "10:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1599 Tenth Line",
        "ZipCode": "K1E 3E8",
        "Coordinates": {
          "Latitude": "45.47220000",
          "Longitude": "-75.49367000"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "EA",
        "Name": "Elmvale Acres",
        "ShortName": "Elmvale Acres",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ea_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1910 St-Laurent",
        "ZipCode": "K1G 1A4",
        "Coordinates": {
          "Latitude": "45.39959500",
          "Longitude": "-75.62312400"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "EP",
        "Name": "Emerald Plaza",
        "ShortName": "Emerald Plaza",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ep_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1547 Merivale",
        "ZipCode": "K2G 4V3",
        "Coordinates": {
          "Latitude": "45.35532700",
          "Longitude": "-75.73564800"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "FH",
        "Name": "Fitzroy Harbour",
        "ShortName": "Fitzroy Harbour",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_fh_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "17:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": [
                "10:00",
                "17:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "13:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "100 Clifford Campbell",
        "ZipCode": "K0A 1X0",
        "Coordinates": {
          "Latitude": "45.47056000",
          "Longitude": "-76.20565700"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "GR",
        "Name": "Greely",
        "ShortName": "Greely",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_gr_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": [
                "10:00",
                "16:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "13:00"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": [
                "10:00",
                "16:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "16:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1448 Meadow Drive",
        "ZipCode": "K4P 1B1",
        "Coordinates": {
          "Latitude": "45.26242000",
          "Longitude": "-75.55672000"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "GB",
        "Name": "Greenboro",
        "ShortName": "Greenboro",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_sc_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "10:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "363 Lorry Greenberg Drive",
        "ZipCode": "K1T 3P8",
        "Coordinates": {
          "Latitude": "45.36387600",
          "Longitude": "-75.63468900"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "HA",
        "Name": "Hazeldean",
        "ShortName": "Hazeldean",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ha_ext_2_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "50 Castlefrank",
        "ZipCode": "K2L 2N5",
        "Coordinates": {
          "Latitude": "45.29557000",
          "Longitude": "-75.88690300"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "MA",
        "Name": "Main",
        "ShortName": "Main",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ma_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "10:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "120 Metcalfe",
        "ZipCode": "K1P 5M2",
        "Coordinates": {
          "Latitude": "45.42027200",
          "Longitude": "-75.69535600"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "MK",
        "Name": "Manotick",
        "ShortName": "Manotick",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_mk_ext_2.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "5499 South River",
        "ZipCode": "K2G 4V3",
        "Coordinates": {
          "Latitude": "45.23071700",
          "Longitude": "-75.67878500"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "ME",
        "Name": "Metcalfe",
        "ShortName": "Metcalfe",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_me_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "17:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": [
                "10:00",
                "17:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "16:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": [
                "10:00",
                "17:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "2782 8th Line",
        "ZipCode": "K0A 2P0",
        "Coordinates": {
          "Latitude": "45.23068700",
          "Longitude": "-75.46946500"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "MU",
        "Name": "Munster",
        "ShortName": "Munster",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_mu_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": [
                "14:30",
                "18:30"
              ],
              "Close": [
                "17:30",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": [
                "14:30",
                "18:30"
              ],
              "Close": [
                "17:30",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": [
                "14:30",
                "18:30"
              ],
              "Close": [
                "17:30",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Thursday",
              "Open": [
                "14:30",
                "18:30"
              ],
              "Close": [
                "17:30",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "7749 Bleeks",
        "ZipCode": "K0A 2P0",
        "Coordinates": {
          "Latitude": "45.16630500",
          "Longitude": "-75.93902300"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "NC",
        "Name": "Nepean Centrepointe",
        "ShortName": "Nepean Centrepointe",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_nc_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "21:00"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "10:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "101 Centrepointe",
        "ZipCode": "K2G 5K7",
        "Coordinates": {
          "Latitude": "45.34591700",
          "Longitude": "-75.76208400"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "NG",
        "Name": "North Gloucester",
        "ShortName": "North Gloucester",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ng_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "2036 Ogilvie",
        "ZipCode": "K1J 7N8",
        "Coordinates": {
          "Latitude": "45.43947800",
          "Longitude": "-75.60140800"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "GO",
        "Name": "North Gower",
        "ShortName": "North Gower",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_go_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "17:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": [
                "10:00",
                "13:00"
              ],
              "Close": [
                "12:30",
                "17:00"
              ]
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "13:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "6579 Fourth Line",
        "ZipCode": "K0A 2T0",
        "Coordinates": {
          "Latitude": "45.13396600",
          "Longitude": "-75.71768800"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "OR",
        "Name": "Orléans",
        "ShortName": "Orléans",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_or_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1705 Orléans",
        "ZipCode": "K1C 4W2",
        "Coordinates": {
          "Latitude": "45.45733100",
          "Longitude": "-75.52486900"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "OS",
        "Name": "Osgoode",
        "ShortName": "Osgoode",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_os_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": [
                "10:00",
                "14:00"
              ],
              "Close": [
                "13:00",
                "17:00"
              ]
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": [
                "10:00",
                "17:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": [
                "14:00",
                "17:30"
              ],
              "Close": [
                "17:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Thursday",
              "Open": [
                "14:00",
                "17:30"
              ],
              "Close": [
                "17:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "5630 Osgoode Main",
        "ZipCode": "K0A 2W0",
        "Coordinates": {
          "Latitude": "45.14914600",
          "Longitude": "-75.60248100"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "RM",
        "Name": "Richmond",
        "ShortName": "Richmond",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_rm_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": [
                "13:30",
                "18:00"
              ],
              "Close": [
                "17:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": [
                "10:00",
                "13:30",
                "18:00"
              ],
              "Close": [
                "12:30",
                "17:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": [
                "13:30",
                "18:00"
              ],
              "Close": [
                "17:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Thursday",
              "Open": [
                "13:30",
                "18:00"
              ],
              "Close": [
                "17:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:30",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "6240 Perth Avenue",
        "ZipCode": "K0A 2Z0",
        "Coordinates": {
          "Latitude": "45.19192700",
          "Longitude": "-75.84422300"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "RI",
        "Name": "Rideau",
        "ShortName": "Rideau",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ri_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "377 Rideau",
        "ZipCode": "K1N 5Y6",
        "Coordinates": {
          "Latitude": "45.43097000",
          "Longitude": "-75.68284000"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "RP",
        "Name": "Rockcliffe Park",
        "ShortName": "Rockcliffe Park",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_rp_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "13:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "13:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "14:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "380 Springfield",
        "ZipCode": "K1M 0L7",
        "Coordinates": {
          "Latitude": "45.45183700",
          "Longitude": "-75.67887100"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "RO",
        "Name": "Rosemount",
        "ShortName": "Rosemount",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ro_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "18 Rosemount",
        "ZipCode": "K1Y 1P4",
        "Coordinates": {
          "Latitude": "45.40229200",
          "Longitude": "-75.72586300"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "RD",
        "Name": "Ruth E. Dickinson",
        "ShortName": "Ruth E. Dickinson",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_rd_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "100 Malvern",
        "ZipCode": "K2J 2G5",
        "Coordinates": {
          "Latitude": "45.28140900",
          "Longitude": "-75.75856400"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "SL",
        "Name": "St-Laurent",
        "ShortName": "St-Laurent",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_sl_ext_1_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "515 Côté",
        "ZipCode": "K1K 0Z8",
        "Coordinates": {
          "Latitude": "45.43651100",
          "Longitude": "-75.64679100"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "ST",
        "Name": "Stittsville",
        "ShortName": "Stittsville",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_st_ext_2_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1637 Stittsville Main",
        "ZipCode": "K2S 1A9",
        "Coordinates": {
          "Latitude": "45.25507200",
          "Longitude": "-75.91550600"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "SU",
        "Name": "Sunnyside",
        "ShortName": "Sunnyside",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_su_ext_2.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "1049 Bank",
        "ZipCode": "K1S 3W9",
        "Coordinates": {
          "Latitude": "45.39655200",
          "Longitude": "-75.68410600"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "VA",
        "Name": "Vanier",
        "ShortName": "Vanier",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_va_ext_2_0.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "10:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "13:00",
              "Close": "18:00"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "17:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "310 Pères Blancs",
        "ZipCode": "K1L 7L5",
        "Coordinates": {
          "Latitude": "45.44503300",
          "Longitude": "-75.66016000"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "VE",
        "Name": "Vernon",
        "ShortName": "Vernon",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/biblioottawalibrary.ca/files/imagecache/branch_image_preview/images/branches/br_ve_ext_1.jpg",
        "BranchHours": {
          "Hours": [
            {
              "DayOfWeek": "Monday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Tuesday",
              "Open": [
                "10:00",
                "17:30"
              ],
              "Close": [
                "13:00",
                "20:30"
              ]
            },
            {
              "DayOfWeek": "Wednesday",
              "Open": "15:00",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Thursday",
              "Open": "17:30",
              "Close": "20:30"
            },
            {
              "DayOfWeek": "Friday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            },
            {
              "DayOfWeek": "Saturday",
              "Open": "10:00",
              "Close": "14:00"
            },
            {
              "DayOfWeek": "Sunday",
              "Open": "CLOSED",
              "Close": "CLOSED"
            }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Address": "8682 Bank",
        "ZipCode": "K0A 3J0",
        "Coordinates": {
          "Latitude": "45.16476200",
          "Longitude": "-75.46341400"
        },
        "PhoneNumber": "613-580-2940"
      },
      {
        "BranchId": "ZBO",
        "Name": "Bookmobile",
        "ShortName": "Bookmobile",
        "ImageUrl": "http://biblioottawalibrary.ca/sites/default/files/images/images/Bookmobile1.jpg",
        "BranchHours": {
          "Hours": [
            { "DayOfWeek": "Monday" },
            { "DayOfWeek": "Tuesday" },
            {
              
            },
            { "DayOfWeek": "Thursday" },
            { "DayOfWeek": "Friday" },
            { "DayOfWeek": "Saturday" },
            { "DayOfWeek": "Sunday" }
          ]
        },
        "HolidayClosures": {
          "HolidayClosure": [
            {
              "HolidayName": "New Year's Day",
              "HolidayDate": "2017-01-01"
            },
            {
              "HolidayName": "Family Day",
              "HolidayDate": "2017-02-20"
            },
            {
              "HolidayName": "Good Friday",
              "HolidayDate": "2017-04-14 "
            },
            {
              "HolidayName": "Easter Sunday",
              "HolidayDate": "2017-04-16"
            },
            {
              "HolidayName": "Easter Monday",
              "HolidayDate": "2017-04-17"
            },
            {
              "HolidayName": "Victoria Day",
              "HolidayDate": "2017-05-22"
            },
            {
              "HolidayName": "Canada Day",
              "HolidayDate": "2017-07-01"
            },
            {
              "HolidayName": "Colonel By Day",
              "HolidayDate": "2017-08-07"
            },
            {
              "HolidayName": "Labour Day",
              "HolidayDate": "2017-09-04"
            },
            {
              "HolidayName": "Thanksgiving",
              "HolidayDate": "2017-10-09"
            },
            {
              "HolidayName": "Remembrance Day",
              "HolidayDate": "2017-11-11"
            },
            {
              "HolidayName": "Christmas Eve",
              "HolidayDate": "2017-12-24"
            },
            {
              "HolidayName": "Christmas Day",
              "HolidayDate": "2017-12-25"
            },
            {
              "HolidayName": "Boxing Day",
              "HolidayDate": "2017-12-26"
            },
            {
              "HolidayName": "New Year's Eve",
              "HolidayDate": "2017-12-31"
            }
          ]
        },
        "Coordinates": {
          "Latitude": "45.36387600",
          "Longitude": "-75.63468900"
        },
        "PhoneNumber": "613-580-2940",
        "Email": "Bookmobile@BiblioOttawaLibrary.ca"
      }
    ]


    };
  }

  render() {
    return (
      <div className='container'>
        <h3 className="title">All Libraries</h3>
          
        <ul>
        {console.log(this.state.branches)}
           {this.state.branches.map( 
             (data, i) =>  
                <li className="collection-item" href="#" key={i}>
                            {data.Name} + {data.PhoneNumber}
                </li> 
              )}
        </ul>

      </div>
    );
  }
}
