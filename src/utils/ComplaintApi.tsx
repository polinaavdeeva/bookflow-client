class ComplaintApi {
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

  getAllComplaints(): Promise<any> {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/complaints`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  addComplaints = (complaint: {
    reason: string;
    text: string;
    userId: string | undefined;
    bookId: string | null;
    id: string;
  }) => {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/complaints`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(complaint),
    }).then(this._checkResponse);
  };

  getUserById(id: string): Promise<any> {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/complaints/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  deleteComplaint(id: string) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/complaints/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

export const complaintApi = new ComplaintApi({
  baseUrl: "http://localhost:4000",
});
