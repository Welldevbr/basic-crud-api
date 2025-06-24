import express from "express";
import swaggerUi from "swagger-ui-express";

import routes from "./routes.js";

import swaggerDocs from "./swagger.json" assert { type: "json" };

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

app.listen(3000, () => {
  console.log("API rodando na porta: port 3000");
});
