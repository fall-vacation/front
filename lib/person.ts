import nookies from "nookies";

const FALL_VACATION_USER_KEY = "fall-vacation-user";

class Person {
  private static _instance: Person;
  public static get instance() {
    return this._instance || (this._instance = new Person());
  }

  private _isLogin: boolean | undefined = undefined;

  public get isLogin() {
    if (this._isLogin === undefined) {
      return true;
    } else {
      return this._isLogin;
    }
  }

  public set isLogin(b: boolean) {
    this._isLogin = b;
  }

  login({ token }: { token: any }) {
    this._isLogin = true;

    nookies.set(
      {},
      FALL_VACATION_USER_KEY,
      JSON.stringify({
        "access-token": token,
      })
    );
  }

  logout() {
    nookies.destroy({}, FALL_VACATION_USER_KEY);
  }

  load() {
    const pack = nookies.get()[FALL_VACATION_USER_KEY];
    return JSON.parse(pack);
  }
}

export default Person.instance;
