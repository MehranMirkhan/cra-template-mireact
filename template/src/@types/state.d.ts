type AppState = {
  meta: MetaState;
  auth: AuthState;
  users: UsersState;
};

type MetaState = Partial<{
  storageLoadedOnInit: boolean;
  lang: string;
  alert: string;
  alertType: AlertType;
}>;

type AlertType = "success" | "info" | "warning" | "error";

type AuthState = Loading &
  Partial<{
    token: SigninRes;
  }>;

type UsersState = Loading &
  Partial<{
    me: User;
  }>;

type Loading = Partial<{
  loading: boolean;
}>;
