export const getGifs = async (tema) => {
    const apiKey = "vDh0lewpmicfshMOacXKPfQas6kjqV4J";
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${tema}&limit=5`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( (gif) => (
        {
            id: gif.id,
            title: gif.title,
            imageUrl: gif.images.downsized_medium.url
        }
    ));
    console.log(gifs)

    return gifs;
  };
