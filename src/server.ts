import {
  createServer,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    //   console.log("Request : ", req);
    // console.log("Response : ", res);
    // console.log(req.url);
    // console.log(req.method);
    const url = req.url; // "/", "/products", "/courses"
    const method = req.method; // "GET", "POST"

    if (url === "/" && method === "GET") {
      // console.log("This is root route");
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is root route!!" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is Product route!!" }));
    } else {
      // console.log("This route is not defined");
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "This route is not defined" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is Success!!");
});
