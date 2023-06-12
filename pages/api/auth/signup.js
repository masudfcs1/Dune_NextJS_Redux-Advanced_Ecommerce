import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  res.send("Welcome Sign up api");
});

export default handler;
