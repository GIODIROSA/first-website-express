const express = require("express");
const app = express();
const path = require("path");

//SETTING

app.set("port", 3000);
// config donde esta la carpeta views
app.set("views", path.join(__dirname, "views"));
// para convertir todo en extensión de html y sea reconocida
app.engine("html", require("ejs").renderFile);
//config para usar el motor de plantilla "ejs"
app.set("view engine", "ejs");

//MIDDLEWARE

//ROUTER
// importo rutas
app.use(require("./routes/index"));

//STATIC
app.use(express.static(path.join(__dirname, "public")));

//LISTENING THE SERVER

app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT:", app.get("port"));
});
