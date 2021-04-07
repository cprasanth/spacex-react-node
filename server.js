// Server

const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;
const baseUrl = 'https://api.spacexdata.com/v4';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/launches', async (req, res) => {
  try {
    const response = await axios.post(`${baseUrl}/launches/query`, {
      query: {
        date_utc: {
          $lte: new Date().toISOString(),
        },
      },
      options: {
        offset: 0,
        limit: 50,
      },
    });
    let filtered = [];
    for (let i = 0; i < response.data.docs.length; i++) {
      const launch = response.data.docs[i];
      filtered.push({
        name: launch.name,
        details: launch.details,
        links: {
          patch: launch.links.patch,
          webcast: launch.links.webcast,
        },
      });
    }
    res.json(filtered);
  } catch (error) {
    res.send(error);
  }
});
app.get('/rockets', async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/rockets`);
    let filtered = [];
    for (let i = 0; i < response.data.length; i++) {
      const rocket = response.data[i];
      filtered.push({
        name: rocket.name,
        description: rocket.description,
        cost_per_launch: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(rocket.cost_per_launch),
        image: rocket.flickr_images[0],
      });
    }
    res.json(filtered);
  } catch (error) {
    res.send(error);
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
