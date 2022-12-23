import React, { Component } from "react";
import axios from "axios";
import { parseISO } from "date-fns";

class TourDates extends Component {
  state = {
    refreshing: false,
    tourInfo: [],
    tourInfoError: [],
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    axios
      .get(
        `https://rest.bandsintown.com/artists/Mouth%20For%20War/events?app_id=${process.env.REACT_APP_BANDSINTOWN_API}`
      )
      .then((res) => this.setState({ tourInfo: res.data }))
      .catch((error) => this.setState({ tourInfoError: error.res }));
  }

  render() {
    return (
      <div>
        <h1 id="tour-header">Upcoming Dates</h1>
        <table id="tour-table">
          <tbody>
            {this.state.tourInfo.map((dates) => {
              const formattedDate = parseISO(
                dates.datetime,
                "MM-dd-YYYY"
              ).toDateString();
              return (
                <tr key={dates._id} id="tour-flexbox">
                  <td id="flex-item">
                    <a id="tour-link" href={dates.url}>
                      {formattedDate}
                    </a>
                  </td>
                  <td id="flex-item">
                    <a id="tour-link" href={dates.url}>
                      {dates.venue.name}
                    </a>
                  </td>
                  <td id="flex-item">
                    <a id="tour-link" href={dates.url}>
                      {dates.venue.location}
                    </a>
                  </td>
                  <td id="flex-item" href={`${dates.url}`}>
                    <a id="tour-link" href={dates.url}>
                      Tickets
                    </a>
                  </td>
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
