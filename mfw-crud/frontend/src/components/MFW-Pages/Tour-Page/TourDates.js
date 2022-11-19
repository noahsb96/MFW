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
        `https://rest.bandsintown.com/artists/Mouth%20For%20War/events?app_id=f8f1586cd655cceb2d942b294596dfb8`
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
                <a href={`${dates.url}`}>
                  <div id="tour-container">
                    <tr key={dates._id} id="tour-flexbox">
                      <td id="flex-item">{formattedDate}</td>
                      <td id="flex-item">{dates.venue.name}</td>
                      <td id="flex-item">{dates.venue.location}</td>
                      <a id="flex-item" href={`${dates.url}`}>
                        Tickets
                      </a>
                    </tr>
                  </div>
                </a>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TourDates;
