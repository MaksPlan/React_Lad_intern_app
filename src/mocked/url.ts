export const URL = (genre: string = 'disco') => ` http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=949e067b666eaebc7e5b7cd8927e5b7e&format=json`;
export const searchURL = (albumName: string) => `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&api_key=949e067b666eaebc7e5b7cd8927e5b7e&format=json`;
export const URLGetInfo = (artist: string, albums: string) => {
    return `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=949e067b666eaebc7e5b7cd8927e5b7e&artist=${artist}&album=${albums}&format=json`
}