import { DatePickerPropValue } from "@consta/uikit/DatePicker";

class Auth {
  private _baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
  }

  private _checkResponse(response: Response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({ status: response.status, res: response });
    }
  }

  authorize(email: string, password: string) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  register(
    name: string,
    email: string,
    password: string,
    gender: string,
    dateOfBirth: string,
    lastName: string,
    patronymic: string,
    registrationDate: Date | undefined
  ) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        lastName: lastName,
        patronymic: patronymic,
        gender: gender,
        dateOfBirth: dateOfBirth,
        registrationDate: registrationDate,
      }),
    }).then(this._checkResponse);
  }

  checkToken(token: string) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

export const auth = new Auth({
  baseUrl: "http://localhost:4000",
});
