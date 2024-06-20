class CommentApi {
  private _baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
  }

  getAllCommentsForBook = (bookId: string | any) => {
    return fetch(`${this._baseUrl}/comments/book/${bookId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении комментариев книги");
        }
        return response.json();
      })
      .then((data) => data.comments)
      .catch((error) => {
        console.error(
          "Ошибка при получении комментариев книги:",
          error.message
        );
        throw error;
      });
  };

  addComment = (content: string, bookId: string, rating: number) => {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content, bookId, rating }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при добавлении комментария");
        }
        return response.json();
      })
      .then((data) => data.comment)
      .catch((error) => {
        console.error("Ошибка при добавлении комментария:", error.message);
        throw error;
      });
  };

  deleteComment = (commentId: string) => {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при удалении комментария");
        }
        return response.json();
      })
      .then((data) => data.message)
      .catch((error) => {
        console.error("Ошибка при удалении комментария:", error.message);
        throw error;
      });
  };

  updateComment = (commentId: string, content: string) => {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при обновлении комментария");
        }
        return response.json();
      })
      .then((data) => data.message)
      .catch((error) => {
        console.error("Ошибка при обновлении комментария:", error.message);
        throw error;
      });
  };
}

export const commentApi = new CommentApi({
  baseUrl: "http://localhost:4000",
});
