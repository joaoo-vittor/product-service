import os from 'os';
import app from './app';
import configApp from './src/config/app';

const { address } = os.networkInterfaces().eth0[0];

const port = Number(process.env.PORT) || 3001;

app.listen(port, configApp.host, () => {
  console.log(`\nCTRL + Click em http://${address}:${port}\n`);
});
