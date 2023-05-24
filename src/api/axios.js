import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e441610ef355afe1caa8d8a0e4821fbc",
    language: "ko-KR"
  }
})

export default instance