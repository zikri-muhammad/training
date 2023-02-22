/**
 * @copyright Wetalk
 * @author Muhammad Zikri <zikri.wetalk@gmail.com>
 * Created: Tue Jan 17 2023
 * Time: 16:03 WITA (GMT+8)
 */

const express = require("express");
const amqp = require("amqplib/callback_api");

const app = express();
let connection;
const data = 


amqp.connect("amqp://localhost", function (connError, connection) {
  if (connError) {
    throw connError;
  }
  // step 2

  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }

    // step 3

    const QUEUE = "Test";
    // const QUEUE = "REGION CODE 0002";
    // const kode_region = 9000;
    channel.assertQueue(QUEUE);
    // step 4
    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
    console.log("message publiser");
  });
});
