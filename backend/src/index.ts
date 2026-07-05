import { Elysia } from "elysia";
import { t } from "elysia";
const app = new Elysia();
app.get("/", () => {
  return "hellllllllllllllllllllllllllll";
});
type bodyType = {
  name: string;
};
app.post("/user", (context) => {
  const { name } = context.body as bodyType;
  return { message: `the name is ${name}` };
});
app.listen(4000);
