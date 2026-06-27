import API from "../api/axios";



export const createLead = async (leadData) => {

  const response = await API.post(
    "/leads",
    leadData
  );

  return response.data;

};

