import axios from "axios";

export default {
  getAll: async () => {
    const response = await axios.get(
      "getcountdowm.json"
    );

    return response.data;
  },
};
