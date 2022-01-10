
export  async function currentLocation() {

        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    resolve(pos);
                });
            } else {
                reject("Geolocation is not supported by this browser.")
            }
        })

}
