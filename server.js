const express = require('express');
const app = express();
const PORT = process.env.PORT || 2901;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
