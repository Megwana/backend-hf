import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: [...prevResource.results, ...data.results],
    }));
  } catch (err) {
    console.error("Error fetching more data:", err.response ? err.response.data : err.message);
  }
};
