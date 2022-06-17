import dotenv from "dotenv";

import getApp from "./app";
import dependencies from "./dependencies";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = getApp(dependencies);

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}`);
});
