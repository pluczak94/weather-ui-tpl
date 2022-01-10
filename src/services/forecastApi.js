import requestApi from "../utils/requestApiUtil";

const URI_SERVICE = 'http://34.116.145.212:8080/api/currentForecast'

export  async function callApi(currentLatitude, currentLongitude) {

    const uri = URI_SERVICE.concat(`?latitude=`).concat(currentLatitude).concat('&longitude=').concat(currentLongitude);

    return requestApi({
        url: uri,
        method: 'GET',
    }).then((response) => {
        return response
    })
        .catch(error => {
            console.error(error.message);
        })
}
