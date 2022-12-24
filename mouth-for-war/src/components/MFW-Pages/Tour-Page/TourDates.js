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
        <div>
          {" "}
          {this.state.tourInfo.map((dates) => {
            const formattedDate = parseISO(
              dates.datetime,
              "MM-dd-YYYY"
            ).toDateString();
            return (
              <a id="tour-link" href={dates.url} key={dates.id}>
                <div id="tour-flexbox">
                  <div id="flex-item">{formattedDate}</div>
                  <div id="flex-item">{dates.venue.name}</div>
                  <div id="flex-item">{dates.venue.location}</div>
                  <div id="flex-item" href={`${dates.url}`}>
                    Tickets
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TourDates;
