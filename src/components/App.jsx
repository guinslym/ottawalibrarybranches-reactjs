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
                        <Link to="/Branche/{data.ShortName}" >
                            {data.Name}

                        </Link>
                </li>
              )}
        </ul>

      </div>
    );
  }
}
