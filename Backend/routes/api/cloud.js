const express = require("express");
const router = express.Router();
const session = require("express-session");
var cors = require("cors");
router.use(cors());
const { BigQuery } = require("@google-cloud/bigquery");
const options = {
  keyFilename: "C:/Users/raksh/Downloads/cmpe-255-hw1-363621-f1ecda7a53e0.json",
  projectId: "cmpe-255-hw1-363621",
};

const bigquery = new BigQuery(options);
router.get("/topbike", async (req, res) => {
  try {
    const query = `SELECT
    *
FROM
    \`Nyc_Bike_Trips.Nyc_top_bike_stations\``;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    if (rows.length !== 0) {
      res.send(rows.slice(0, 5));
    } else {
      res.send("failure");
    }
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});

router.get("/tripgrowth", async (req, res) => {
  try {
    const query = `SELECT
      *
  FROM
      \`Nyc_Bike_Trips.Nyc_bike_trip_growth\``;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    if (rows.length !== 0) {
      res.send(rows);
    } else {
      res.send("failure");
    }
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});
router.get("/agegroup", async (req, res) => {
  try {
    const query = `SELECT
        *
    FROM
        \`Nyc_Bike_Trips.nyc_bike_users_by_gen\``;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    if (rows.length !== 0) {
      res.send(rows);
    } else {
      res.send("failure");
    }
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});

router.get("/gender", async (req, res) => {
  try {
    const query = `SELECT
          *
      FROM
          \`Nyc_Bike_Trips.nyc_bike_users_by_gender\``;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    if (rows.length !== 0) {
      res.send(rows);
    } else {
      res.send("failure");
    }
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});

router.get("/tripduration", async (req, res) => {
  try {
    const query = `SELECT
          *
      FROM
          \`Nyc_Bike_Trips.nyc_bike_users_trip_hour_duration\``;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    if (rows.length !== 0) {
      res.send(rows);
    } else {
      res.send("failure");
    }
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});
module.exports = router;
