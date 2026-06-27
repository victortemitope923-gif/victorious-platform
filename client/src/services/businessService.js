import api from "./api";



export const getBusinessProfile =
  async () => {

    const response =
      await api.get("/business");

    return response.data;

  };

