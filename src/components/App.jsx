// @flow
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {holidays: [
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

    };
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>

        <ul>
          
          {this.state.holidays.map(
                  (data, i) => 
                   <li key={i} >
                        {console.log(data.HolidayName)}
                        {data.HolidayName} <br/>
                         {data.HolidayDate} 
                         <hr/>
                        </li>
                   )}

        </ul>
      </div>
    );
  }
}
