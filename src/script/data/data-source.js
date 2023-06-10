const url = "https://api.themoviedb.org/3";
const api_key = "40b5c8cd2f9460b2dffe51993366ee58";

class DataSource {
  static searchMovie(keyword) {
    return fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

class Main {
  static fetchMov() {
    return fetch(`${url}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`movies not found`);
        }
      });
  }
}

export { DataSource, Main };
