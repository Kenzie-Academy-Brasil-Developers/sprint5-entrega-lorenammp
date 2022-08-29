import app from "./src/app";
import { AppDataSource } from "./src/data-source";

const init = async () => {
  console.log("WHAT IN THE LIVING FUCK!?");

  const PORT = process.env.DB_PORT || 3005;
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`App is running!`);
  });
};
init();
