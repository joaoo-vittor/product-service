/* eslint-disable import/extensions */
/* eslint-disable default-case */
// const amqp = require('amqplib');
import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

import userModel from '../models/user/index.mjs';

console.log('Start consuming: \n');

class Consumer {
  constructor() {
    this.queueName = 'product';
  }

  async getChannel() {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(this.queueName, { durable: false });

    return channel;
  }

  start() {
    try {
      this.getChannel()
        .then((channel) => {
          channel.consume(this.queueName, this.rules, { noAck: true });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  }

  rules(msg) {
    const method = msg.properties.contentType;
    const dataRevieved = JSON.parse(msg.content.toString());

    console.log(` [X] Recieved: ${method} `);

    const data = {
      ...dataRevieved,
      active: dataRevieved.active ? '1' : '0',
    };

    switch (method) {
      case 'created_user':
        Consumer.createdUser(data);
        return;
      case 'updated_user':
        Consumer.updatedUser(data);
    }
  }

  static createdUser(data) {
    const fn = async () => {
      try {
        await userModel.create(data);
      } catch (e) {
        console.log(e);
      }
    };

    fn();
  }

  static updatedUser(data) {
    const fn = async () => {
      try {
        const user = await userModel.findOne({
          where: { id: data.id },
        });

        await user.update(data);
      } catch (e) {
        console.log(e);
      }
    };

    fn();
  }
}

const consumer = new Consumer();
consumer.start();
