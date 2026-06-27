const API =
  "https://victorious-platform-api.onrender.com/api/business";



export const getBusinessProfile =
  async () => {

    const response =
      await fetch(API);

    return response.json();

};

