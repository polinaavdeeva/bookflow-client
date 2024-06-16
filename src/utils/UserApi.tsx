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
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  getUserAvatar(): Promise<any> {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  uploadAvatar(avatarFile: File): Promise<any> {
    const formData = new FormData();
    formData.append("avatar", avatarFile);

    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }).then(this._checkResponse);
  }

  sendRating(userId: string, rating: number): Promise<any> {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/${userId}/rating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ rating }),
    }).then(this._checkResponse);
  }

  editUserInfo(data: {
    name: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    lastName: string;
    patronymic: string;
  }): Promise<any> {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        lastName: data.lastName,
        patronymic: data.patronymic,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
      }),
    }).then(this._checkResponse);
  }

  getUserById(id: string): Promise<any> {
    return fetch(`${this._baseUrl}/superusers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse).catch(()=>console.log("err in superusers"));
  }
}

export const userApi = new UserApi({
  baseUrl: "http://localhost:4000",
});
