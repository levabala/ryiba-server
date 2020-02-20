import { exec } from 'child_process';
import express from 'express';

const app = express();
const port = 3000;

app.get("/run", (req, res) => {
  const command = req.query.target;
  console.log(`exec ${command}`);

  exec(command, (err, stdout) => {
    res.end(stdout);
    console.log(`stdout:\n${stdout}`);
  });
});

app.use("/", express.static("node_modules/ryiba/dist"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
