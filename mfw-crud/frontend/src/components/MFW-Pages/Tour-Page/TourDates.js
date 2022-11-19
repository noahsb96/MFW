import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TourDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
    };
  }
  componentDidMount() {
    this.getDates();
  }

  getDates = () => {
    fetch(
      `https://rest.bandsintown.com/artists/Mouth%20For%20War/events?app_id=${process.env.BANDS_IN_TOWN_ID}`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({ dates: data.dates });
      });
  };

  render() {
    return (
      <div>
        <h1>Tour</h1>
        <table>
          <tbody>
            {this.state.dates.map((dates) => {
              return (
                <tr key={dates._id}>
                  <td>{dates.datetime}</td>
                  <td>
                    <Link to={`/${dates._id}`}>{dates.url}</Link>
                  </td>
                  <td>{dates.venue.location}</td>
                  <button onClick={`window.location.href=${dates.url}`}>
                    Tickets
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TourDates;
