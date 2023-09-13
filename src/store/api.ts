import { AxiosResponse } from "axios";

export const PROTOCOL = "http";
export const BASE_URL = `${PROTOCOL}://localhost:5414/api`;
export function successful(res: AxiosResponse) {
  return res.status >= 200 || res.status < 300;
}
