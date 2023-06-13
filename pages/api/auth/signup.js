import { createRouter } from "next-connect";
import useSWR from "swr";

const handlerr = createRouter();

handlerr.post(async (req, res) => {
  res.send("Welcome from sign up api");
});

export default handlerr.handler();
