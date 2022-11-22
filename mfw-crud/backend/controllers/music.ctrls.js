const spotifyAuth = (req, res) => {
  (clientId = process.env.CLIENT_ID),
    (clientSecret = process.env.CLIENT_SECRET);

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  req.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const token = body.access_token;
    }
  });
};

module.exports = { spotifyAuth };
