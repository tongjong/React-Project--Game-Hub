import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c431e8df739c4d70a2aac29a28caa347",
  },
});
