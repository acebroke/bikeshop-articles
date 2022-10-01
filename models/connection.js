var mongoose = require("mongoose");
var keyDB = process.env.CONNECTION_STRING;
mongoose
  .connect(
    keyDB,
    () => {
      console.log("I'm connected ! ");
    }
  )
  .catch((error) => console.error(error));
