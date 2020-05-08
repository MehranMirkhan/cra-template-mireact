import { call } from "redux-saga/effects";

import api from "src/api";
import { signupSaga, signinSaga } from "src/state/sagas/auth.saga";

describe("Auth Saga", () => {
  const responseSuccess = { status: 200 };
  const responseFail = {
    status: 401,
    data: { message: "some error" },
  };
  const internalError = {
    name: "unknown error",
    message: "something went wrong",
  };
  const signupReq: SignupReq = { username: "someone", password: "123456" };

  describe("Signup", () => {
    it("Signup success", () => {
      const gen = signupSaga(signupReq);
      expect(gen.next().value).toEqual(call(api.auth.signup, signupReq));
      expect(gen.next(responseSuccess).value).toEqual(
        call(signinSaga, signupReq)
      );
    });
    it("Signup should fail on server error", () => {
      const gen = signupSaga(signupReq);
      gen.next();
      expect(() => gen.next(responseFail)).toThrow();
    });
    it("Signup should fail on internal error", () => {
      const gen = signupSaga(signupReq);
      gen.next();
      expect(() => gen.throw(internalError)).toThrow(internalError);
    });
  });
});
