import axios from "axios";

export default axios.create({
  baseURL: "https://today.line.me/id/portaljson",
});
