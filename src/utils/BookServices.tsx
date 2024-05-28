class BookServices {
  private _checkResponse(response: Response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({ status: response.status, res: response });
    }
  }

  static async getBooksByOwner(owner: string): Promise<any> {
    try {
      const token = localStorage.getItem("token");
      const baseUrl = "http://localhost:4000";

      const response = await fetch(`${baseUrl}/books/${owner}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Ошибка при получении книг пользователя");
      }

      const data = await response.json();
      return data.books;
    } catch (error) {
      throw new Error(`Ошибка при получении книг пользователя: ${error}`);
    }
  }

  static bookSearch = async (name: string) => {
    const baseUrl = "http://localhost:4000";
    try {
      const response = await fetch(`${baseUrl}/books/search?name=${name}`);
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      return response.json();
    } catch (err) {
      console.log(err);
    }
  };
}

export default BookServices;
