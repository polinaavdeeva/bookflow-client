class BookServices {
  static async getBooksByOwner(owner: string): Promise<any> {
    try {
      const token = localStorage.getItem("token");
      const baseUrl = "https://bookflow-api.vercel.app";

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
    const baseUrl = "https://bookflow-api.vercel.app";
    try {
      const response = await fetch(`${baseUrl}/booksbyid/${bookId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching the book:", error);
    }
  };

  static bookSearch = async (name: string) => {
    const baseUrl = "https://bookflow-api.vercel.app";
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
    const baseUrl = "https://bookflow-api.vercel.app";
    //const token = localStorage.getItem("token");
    return fetch(`${baseUrl}/books/image?bookId=${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    });
  };

  static uploadBookImage = async (imageFile: any, bookId: any) => {
    const baseUrl = "https://bookflow-api.vercel.app";
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("_id", bookId);
    console.log(bookId);

    try {
      const response = await fetch(`${baseUrl}/books/image`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Upload successful:", result);
    } catch (error) {
      console.error("There was a problem with the upload operation:", error);
    }
  };

  static receiveBook = async (bookId: any, ownerId: any) => {
    const baseUrl = "https://bookflow-api.vercel.app";
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${baseUrl}/books/receive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookId, ownerId }),
      });

      const data = await response.json();
    } catch (err) {
      console.error(err);
    }
  };

  static getAllReceivedBooks = async () => {
    const baseUrl = "https://bookflow-api.vercel.app";
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${baseUrl}/books/receivedMy`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const books = await response.json();
      return books;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  static addBookIfExsists = async (book_id: any) => {
    const baseUrl = "https://bookflow-api.vercel.app";
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${baseUrl}/existingBooks`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ book_id }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const books = await response.json();
      return books;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  static deleteBook = (bookId: string) => {
    const token = localStorage.getItem("token");
    return fetch(`http://bookflow-api.vercel.appbooks/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при удалении книги");
        }
        return response.json();
      })
      .then((data) => data.message)
      .catch((error) => {
        console.error("Ошибка при удалении комментария:", error.message);
        throw error;
      });
  };
}

export default BookServices;
