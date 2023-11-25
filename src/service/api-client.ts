import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8265beb857b848bd8815e6a5e70049c9",
  },
});
