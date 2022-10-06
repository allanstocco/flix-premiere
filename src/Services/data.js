import axios from "axios";

export const getMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10"
    );
    return data;
  } catch (err) {
    if (err) {
      throw Error("Not Working");
    }
    throw new Error(err.message);
  }
};
