export const getGifs = async (field) => {
  const apiKey = "9wfm5RVdeDzS85Ukzzw8jjmWsb72PZsh";
  const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${field}&limit=10`;
  const resp = await fetch(urlApi);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
