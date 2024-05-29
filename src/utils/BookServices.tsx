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

  static getBookById = async (bookId: any) => {
    const baseUrl = "http://localhost:4000";
    try {
      const response = await fetch(`${baseUrl}/books/${bookId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching the book:', error);
    }
  };

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

 static getBookImage = async (bookId: any) => {
    const baseUrl = "http://localhost:4000";
    //const token = localStorage.getItem("token");
    return fetch(`${baseUrl}/books/image?bookId=${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    });
  }

  static uploadBookImage = async (imageFile: any, bookId: any) => {
    const baseUrl = "http://localhost:4000";
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("_id", bookId);
    console.log(bookId)

    try {
      const response = await fetch(`${baseUrl}/books/image`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Upload successful:', result);
    } catch (error) {
      console.error('There was a problem with the upload operation:', error);
    }
  }
}

export default BookServices;
