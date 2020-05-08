import { AxiosResponse } from "axios";
import { axios } from ".";

const auth = {
  signup: (req: SignupReq): Promise<AxiosResponse<any>> =>
    axios.post("/register", req),
  signin: (req: SigninReq): Promise<AxiosResponse<any>> =>
    axios.post("/authenticate", req),
  changePassword: (req: ChangePasswordReq): Promise<AxiosResponse<any>> =>
    axios.post("/account/change-password", req),
};

export default auth;
