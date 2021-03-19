const app = require("./server/app");
const PORT = process.env.PORT || 3001;
const proxy = require("http-proxy-middleware");

app.use(proxy(["/api"], { target: "http://localhost:3001" }));

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
