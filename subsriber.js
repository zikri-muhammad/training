/**
 * @copyright Wetalk
 * @author Muhammad Zikri <zikri.wetalk@gmail.com>
 * Created: Tue Jan 17 2023
 * Time: 16:03 WITA (GMT+8)
 */
const express = require('express');
const amqp = require('amqplib/callback_api');

const app = express();

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        channel.assertQueue('Test', {
            durable: true
        });
        // channel.bindQueue('Test');

        // app.get('/subscribe', function(req, res) {
            channel.consume('Test', function(msg) {
                console.log(msg.content.toString());
                channel.ack(msg);
                res.send(msg.content.toString());
            }, {
                noAck: false
            });
        // });

        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    });
});


