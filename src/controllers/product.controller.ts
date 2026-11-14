import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  // /product -> GET, POST, PUT

  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "Product-1",
        price: 20,
      },
      {
        id: 2,
        name: "Product-2",
        price: 30,
      },
    ];

    productService();

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrieved successfully!",
        data: products,
      }),
    );
  }
};

export default productController;
