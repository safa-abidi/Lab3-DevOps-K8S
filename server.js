const express = require("express");
const promBundle = require('prom-client');

const app = express();
const port = 3000;

//app.use(metricsMiddleware);
// Enable collection of default metrics
promBundle.collectDefaultMetrics();

app.get("/", (req, res) => {
  res.send("Hello World from GL5 DevOps Lab - K8s");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get('/metrics', async (req, res) => {
  try {
    const metrics = await promBundle.register.metrics();
    res.set('Content-Type', promBundle.register.contentType);
    res.send(metrics);
  } catch (error) {
    res.status(500).send('Error generating metrics');
  }
});

const logger = require('fluent-logger').createFluentSender('node.app', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0
});

// Log an example message
logger.emit('info', { message: 'Log message from Node.js app' });


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});