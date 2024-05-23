const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY5YTdmNGNlY2RhNTM1NjJmOWQwMzdkMzQ4Y2I2YSIsInN1YiI6IjY1OWJkYTc5ODc0MWM0MDI1ODk0ZDU4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tpKCEBRCx5mkgy8UOLKVTL64FEWLTHZgdKQJ9QAFWDc",
  },
};

export async function fetchTrendingNow() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=d5f9a7f4cecda53562f9d037d348cb6a"
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTopRated() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d5f9a7f4cecda53562f9d037d348cb6a"
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchActionMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching horror movies", error);
  }
}

export async function fetchComedyMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching comedy movies");
  }
}

export async function fetchHorroMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching Horror movies");
  }
}

export async function fetchRomanceMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching Horror movies");
  }
}

export async function fetchDocumantaries() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99",
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching Horror movies");
  }
}

export async function fetchMovie(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchImage(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecommanded(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchReviews(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchKeywords(id: string) {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/693134/keywords",
      options
    );
    const data = await res.json();
    return data.keywords;
  } catch (error) {
    console.log(error);
  }
}
