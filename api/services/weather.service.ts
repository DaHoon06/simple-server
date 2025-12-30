import { AxiosInstance } from "axios";
import { axiosInstance } from "../lib/axios";
import dotenv from "dotenv";

dotenv.config();

class WeatherService {
  private fetcher: AxiosInstance;
  private readonly API_KEY: string;
  private readonly BASE_URL: string;

  constructor() {
    this.API_KEY = process.env.WEATHER_API_KEY as string;
    this.BASE_URL = process.env.WEATHER_API_URL as string;
    //TODO header 변경
    const config = {
      baseURL: this.BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.fetcher = axiosInstance(config);
  }

  // TODO 날씨 요청
  async requestWeatherDataGetToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const url = `${this.BASE_URL}?pageNo=1&numOfRows=1000&dataType=JSON&base_date=${year}${month}${day}&base_time=${hour}00&nx=55&ny=127&authKey=${this.API_KEY}`;
    console.log(url);
    const response = await this.fetcher.get(url);

    console.log(response.data);
    return response.data;
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
