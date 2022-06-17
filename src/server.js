import dotenv from "dotenv";

import getApp from "app";

dotenv.config();

const PORT = process.env.PORT || 5000;
const dependencies = {};
const app = getApp(dependencies);

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}`);
});
