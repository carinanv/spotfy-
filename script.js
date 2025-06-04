document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
    {name: 'Luzi Zhao', image: './images/pote.jpeg'},
    {name: 'Yihao Zhang', image: './images/dark.png'},
    {name: 'Libi', image: './images/river.png'},
    {name: 'XG - Chisa, Hina, Juria', image: './images/monstera.jpg'},
    {name: 'Shinee', image: './images/berrie.jpg'},
    {name: 'BTOB', image: './images/flor.png'},
    {name: 'Shawn Mendes', image: './images/abstrata.png'},
    {name: 'Fuji Kaze', image: './images/pattern.jpg'}
];

    const albumsData = [
    {name: 'Rosie', artist: 'Rosé', image: './images/rose.png'},
    {name: 'Ruby', artist: 'Jennie', image: './images/ruby.png'},
    {name: 'Purpose', artist: 'Justin Bieber', image: './images/purpose.png'},
    {name: 'Love Yourself', artist: 'BTS', image: './images/love.png'},
    {name: 'AWE', artist: 'XG', image: './images/ai-generated.jpg'},
    {name: 'Iluminate', artist: 'Shawn Mendes', image: './images/iluminate.jpg'},
];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')


    artistsData.forEach(artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
    <img src = "${artist.image}" alt= "imagem do ${artist.name}">
    <div>
        <h3>${artist.name}</h3>
        <p>artista</p>

    </div>

    `

    artistGrid.appendChild(artistCard)

    
    })

    albumsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
    <img src = "${album.image}" alt= "imagem do ${album.name}">
    <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>

    </div>

    `

    albumsGrid.appendChild(albumCard)

    })


})





