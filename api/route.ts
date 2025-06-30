import { END_POINTS, EndPointType } from "./config";
import { WeatherService } from "./services";

export const Routes = async (
  endpoint: EndPointType
): Promise<Record<string, any>> => {
  switch (endpoint) {
    case END_POINTS.playground:
      // TODO service 로 연결해서 데이터 반환
      return { message: "Hello, TypeScript!" };
    case END_POINTS.weather:
      const weatherData = await WeatherService.requestWeatherData();
      return { message: weatherData };
    default:
      return { error: "Unauthorized" };
  }
};
