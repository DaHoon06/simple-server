import { AxiosInstance } from "axios";
import { axiosInstance } from "../lib/axios";

class WeatherService {
  private fetcher: AxiosInstance;
  private readonly API_KEY: string;
  private readonly BASE_URL: string;

  constructor() {
    this.API_KEY = process.env.API_KEY as string;
    this.BASE_URL = process.env.BASE_URL as string;
    //TODO header 변경
    const config = {
      baseURL: this.BASE_URL,
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": this.API_KEY,
      },
    };
    this.fetcher = axiosInstance(config);
  }

  // TODO 날씨 요청
  async requestWeatherData() {
    return {
      data: [
        {
          name: "서울",
          weather: "맑음",
          temperature: 20,
        },
      ],
    };
  }
}

export default new WeatherService();
