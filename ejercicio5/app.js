const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbums = document.createElement('ul');
albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ulAlbums.appendChild(li);
});
document.body.appendChild(ulAlbums);