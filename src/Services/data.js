import axios from "axios";

export const getMovies = async (limit) => {
  try {
      const data = await axios.get(
        `https://api.flixpremiere.com/v1/films/filter/now_showing?limit=${limit}`
      );
      return data;
  } catch (err) {
    throw new Error("New error message", { cause: err });
  }
};
