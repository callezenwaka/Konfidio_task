import createServer from "./server";

const startServer = () => {
const app = createServer();


// Set up port and start the server
app.listen( process.env.PORT, () => {
  console.log(`Server running at:`);
  console.log(`- Local: http://localhost:${process.env.PORT}`);
});
}
startServer();