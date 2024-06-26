const figlet = require("figlet");

const fontName = process.argv[2] || "Standard";

figlet.text(
  "yourPhrase", // Here goes your phrase :)
  {
    font: fontName,
  },
  (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
