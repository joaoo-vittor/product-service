import dotenv from 'dotenv';

dotenv.config();

import appConfig from './app';

const port = process.env.PORT || 3001;

const whiteList = [`http://${appConfig.host}:${port}`];

export default {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
