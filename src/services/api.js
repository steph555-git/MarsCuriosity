export const getImages = async (currentInputDate, page = 1) => {
  try {
    const resp = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${currentInputDate}&api_key=8S0Zp1SfdyLGBP92bA30026ljWwX4XKaIgsXpHOx&page=${page}`
    );
    const data = await resp.json();
    console.log('resp', resp)
    return data.photos;
  } catch (e) {
    console.log(`Error images: ${e}`);
  }
};