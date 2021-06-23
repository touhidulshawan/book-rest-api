import dotenv from "dotenv";
dotenv.config({ slient: true });

const SERVER_HOSTNAME = process.env.HOSTNAME || "localhost";
const SERVER_PORT = process.env.PORT || 3001;
const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  server: SERVER,
};

export default config;
