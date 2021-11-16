const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");
const url = "mongodb://localhost:27017";
// const { db } = require("./database");

app.get("/", (req, res) => {
  mongodb.MongoClient.connect(url, (error, client) => {
    if (error) {
      console.log("Connection error  !", error);
      res.status(400).json(error);
    } else {
      console.log("Database Connection Successful  !");
    }
    const db = client.db("uploadVideo_db");
    const videoTitle = "myvideo1";
    const bucket = new mongodb.GridFSBucket(db);
    const videoUploadStream = bucket.openUploadStream(videoTitle);
    const videoReadStream = fs.createReadStream("./Assets/video01.mp4"); //actual file path
    videoReadStream.pipe(videoUploadStream);
    console.log(`${videoTitle} uploaded Successful :) `);
  });
  res.status(200).send("Done...");
});

app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
