import express from 'express';
import os from 'os';

const app = express();

const PORT = 4500;

app.get('/', (req, res) => {
  const helloMessage = `VERSION 2: hello from the ${os.hostname()}`;
  console.log(helloMessage);
  res.status(200).send(helloMessage);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// k rollout status deploy kube-hello
