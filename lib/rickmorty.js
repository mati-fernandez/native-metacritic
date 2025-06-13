// lib/rickmorty.js
export async function getCharacters(page = 1) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await res.json();
  console.log('status:', res.status, 'data:', json);

  const items = json.results || [];

  return items.map((c) => ({
    id: c.id,
    name: c.name,
    image: c.image,
    species: c.species,
    status: c.status,
  }));
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
