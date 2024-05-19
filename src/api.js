import axios from "axios";
const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID Q2QyBm-aQVA2ZisgA7tIihG-RGcf4Fe_iGKS9IRFDrE",
    },
    params: {
      query: searchTerm,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
