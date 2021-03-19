const app = require("./server/app");
const PORT = process.env.PORT || 3001;
const proxy = require("http-proxy-middleware");

app.use(proxy(["/api"], { target: "https://pokedex-amit-maor.herokuapp.com" }));

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
