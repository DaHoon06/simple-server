import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export function axiosInstance(axiosConfig: AxiosRequestConfig): AxiosInstance {
  return Axios.create(axiosConfig);
}
