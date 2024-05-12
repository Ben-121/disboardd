// bot.js
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello I am alive');
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const send_message = async (token) => {
  const channel = "Your channel ID";
  const message = "hello";

  const header = { 'authorization': token };
  const payload = {
    type: 2,
    application_id: "302050872383242240",
    guild_id: "1187992353793900605",
    channel_id: channel,
    session_id: "a",
    data: {
      version: "1051151064008769576",
      id: "947088344167366698",
      name: "bump",
      type: 1,
      options: []
    }
  };

  try {
    const response = await fetch('https://discord.com/api/v9/interactions', {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    });

    console.log(response.status);
    console.log(await response.text());
  } catch (error) {
    console.error(error);
  }
};

const token = process.env.ENV_PARAM2;

setInterval(() => {
  const delay = Math.floor(Math.random() * (60000 - 30000) + 30000);
  setTimeout(send_message, delay, token);
}, 7200000);
