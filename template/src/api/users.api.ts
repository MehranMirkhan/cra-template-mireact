import { AxiosResponse } from "axios";
import { axios } from ".";
import { apiVer } from "src/app.config.json";

const users = {
  fetchMe: (): Promise<AxiosResponse<any>> => axios.get(`/${apiVer}/users/me`),
  updateMe: (user: User): Promise<AxiosResponse<any>> =>
    axios.patch(`/${apiVer}/users/me`, user),
};

export default users;
