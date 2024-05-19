class UserApi {
  private _baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
  }

  private _checkResponse(response: Response): Promise<any> {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject({ status: response.status, res: response });
  }

  getUserInfo(): Promise<any> {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  editUserInfo(data: {
    name: string;
    email: string;
    city: string;
    gender: string;
    dateOfBirth: string;
  }): Promise<any> {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        city: data.city,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
      }),
    }).then(this._checkResponse);
  }
}

export const userApi = new UserApi({
  baseUrl: "http://localhost:4000",
});
