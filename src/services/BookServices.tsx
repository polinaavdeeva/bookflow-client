class BookServices{

    static bookSearch = async (name: string) => {
        try {
            console.log(name)
          const response = await fetch(`/books/search?name=${name}`);
          if (!response.ok) {
            throw new Error('Ошибка');
          }
          console.log(response)
          return response.json();
        } catch (err) {
          console.log(err)
        }
      };
}

export default BookServices