class AdsServices {
    static baseUrl = "http://localhost:4000";
    private _checkResponse(response: Response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({ status: response.status, res: response });
      }
    }

    static getAdsSlide = async (number: any) => {
        return fetch(`${AdsServices.baseUrl}/ads/${number}`, {
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
}

export default AdsServices;