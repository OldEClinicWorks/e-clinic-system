import { AxiosResponse } from "axios";

export const BASE_URL = "localhost:5414/api";
export function successful(res: AxiosResponse){
  return res.status >= 200 || res.status < 300;
}