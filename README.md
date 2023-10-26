# Social-Media-API

## Description

This project was made to practice using MongoDB and Mongoose. It was fun to make this api, and see how my programming skills can be applied to build things like social media APIs! The problem this app solves is being able to keep track of users and their data on a social media platform. 

## Installation

The dependencies are already listed in the package.json, so you can run `npm install` to get the required dependencies. After that, you can start the program by running `node server.js`!

## Usage

[Walkthrough video](https://watch.screencastify.com/v/BtQ7IHnvciBWnh0NpzqX)

To use this API, start up the app and then use insomnia to interact with the database! You can use the CRUD routes that are found in the routes folder to add users, add thoughts, and add reactions! You can also retrieve the data, update data, and delete data. 

-note: As of right now, there are issues with the thought and reaction routes. They are mostly broken unfortunately, but the user routes are working!

## Credits

I used heavily referenced the mini project for this module, as well as Kevin's and Greg's repositories. Thank you for sharing! I struggled to get started on this project/understand mongoose, so looking at my classmates code helped me to get started, I looked up things I didn't understand and tried to add comments explaining the code where I didn't already know what the code did. Here are the links to the resources I used.

[What's the meaning of 'trim' when use in mongoose?](https://stackoverflow.com/questions/20766360/whats-the-meaning-of-trim-when-use-in-mongoose) From stackoverflow

[Understanding 'unique in Mongoose](https://masteringjs.io/tutorials/mongoose/unique) from Mastering JS

[mongoose schema set max length for a String](https://stackoverflow.com/questions/28829912/mongoose-schema-set-max-length-for-a-string) from stackoverflow

[MongoDB Relationships using Mongoose in NodeJS](https://dev.to/alexmercedcoder/mongodb-relationships-using-mongoose-in-nodejs-54cc) from Dev

[What is the '__v' field in Mongoose](https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose)

From MongoDB: [$set](https://www.mongodb.com/docs/manual/reference/operator/update/set/)

From Mongoose:

[How to Use findOneAndUpdate() in Mongoose](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)

[MongooseArray.prototype.pull()](https://mongoosejs.com/docs/5.x/docs/api/array.html#mongoosearray_MongooseArray-pull)

[Updating Using save()](https://mongoosejs.com/docs/documents.html#updating-using-save)
