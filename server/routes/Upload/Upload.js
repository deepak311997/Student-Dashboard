const path = require('path');
const uploadRoutes = require('express')();

uploadRoutes.post('/', (req, res) => {
  const MongoClient = require('mongodb').MongoClient;
  const url = "mongodb://localhost:27017/";

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("admin");
    const collectionName = "studentDashboard";
    const data = req.body;
    const header = data[0].slice(1);
    this.content = [];

    data.slice(1).forEach((student) => {
      this.std = student.slice(1);
      this.studentObject = {};
      header.forEach((header, index) => {
        this.studentObject[header] = this.std[index];
      });
      this.content.push(this.studentObject);
    });

    // delete existing collection
    // dbo.collection(collectionName).drop((err, delOK) => {
    //   if (err) throw err;
    //   if (delOK) console.log("Collection deleted");
    //   db.close();
    // });

    // Create a new collection
    dbo.collection(collectionName).insert(this.content, (err, res) => {
      if (err) throw err;
      console.log("CSV uploaded to mongoDB as", collectionName, "Collection");
      db.close();
    });
  });
});

module.exports = uploadRoutes;
