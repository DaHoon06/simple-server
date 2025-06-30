import { END_POINTS, EndPointType } from "./config";

export const Routes = (endpoint: EndPointType): Record<string, any> => {
  switch (endpoint) {
    case END_POINTS.playground:
      // TODO service 로 연결해서 데이터 반환
      return { message: "Hello, TypeScript!" };
    default:
      return { error: "Unauthorized" };
  }
};
