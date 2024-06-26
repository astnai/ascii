const figlet = require("figlet");

figlet.fonts((err, fonts) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }

  console.log("Available fonts:");
  console.log(fonts.join("\n"));
});
