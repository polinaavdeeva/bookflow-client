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

  getUserAvatar(userId : any): Promise<any> {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/usersavatar/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((response)=>{
      return response.blob();
    });
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

  sendRating(userId: string | undefined, rating: number): Promise<any> {
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
    })
      .then(this._checkResponse)
      .catch(() => console.log("err in superusers"));
  }

  deleteUser = (userId: string) => {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при удалении пользователя");
        }
        return response.json();
      })
      .then((data) => data.message)
      .catch((error) => {
        console.error("Ошибка при удалении пользователя:", error.message);
        throw error;
      });
  };
}

export const userApi = new UserApi({
  baseUrl: "https://bookflow-api.vercel.app",
});
