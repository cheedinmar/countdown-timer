import axios from "axios";

export default {
  getAll: async () => {
    const response = await axios.get(
      "../../../public/getcountdowm.json"
    );

    return response.data;
  },
};
