const GEOCODE_ADDRESS = (address) => {
  return new Promise((resolve, reject) => {
    const mapQuestToken = "tdol3vJL4lBh2pXefGnrTaAAT89WK13U";
      fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestToken}&location=${address}`)
        .then(res => res.json())
        .then(res => {
          if (res.results.length > 0) {
            if (typeof res.results[0].locations !== "undefined" && res.results[0].locations.length > 0) {
              resolve(res.results[0].locations[0].latLng)
            } else {
              resolve(false)
            }
          } else {
            resolve(false)
          }
        })
        .catch((err) => {
          reject(err)
        });
  });
}

export {
  GEOCODE_ADDRESS
}