// lib/rickmorty.js
export async function getCharacters(page = 1) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await res.json();

  const items = json.results || [];
  console.log(items);
  //Para mostrar loader simulamos carga
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          items.map((c) => ({
            image: c.image,
            id: c.id,
            name: c.name,
            gender: c.gender,
            species: c.species,
            status: c.status,
            url: c.url,
          }))
        ),
      1500
    )
  );
}

export async function getCharacterDetails(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const c = await res.json();

  return {
    id: c.id,
    name: c.name,
    image: c.image,
    species: c.species,
    status: c.status,
    gender: c.gender,
    origin: c.origin?.name,
    location: c.location?.name,
    episodeCount: c.episode?.length,
  };
}
