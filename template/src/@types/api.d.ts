type SignupReq = {
  username: string;
  password: string;
};

type SigninReq = {
  username: string;
  password: string;
};

type SigninRes = {
  access_token: string;
  refresh_token: string;
};

type ChangePasswordReq = {
  currentPassword: string;
  newPassword: string;
};
