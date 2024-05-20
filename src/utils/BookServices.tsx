class BookServices{

  

  static bookSearch = async (name: string) => {
    const baseUrl = "http://localhost:4000"
      try {
          const response = await fetch(`${baseUrl}/books/search?name=${name}`);
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        return response.json();
      } catch (err) {
        console.log(err)
      }
    };
}

export default BookServices
