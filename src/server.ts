import { createServer } from "http";
import { listBooks } from "./functions/bookManager";

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/books") {
    const data = listBooks();
    const json = JSON.stringify(data);

    res.setHeader("Content-Type", "application/json");
    res.end(json);
  }
});

server.listen(3000);
