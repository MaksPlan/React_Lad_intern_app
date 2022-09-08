export interface IAttr {
    tag: string;
    page: string;
    perPage: string;
}

export interface IAlbums {
        album : IAlbum[];
        '@attr': IAttr;
}

export interface IAlbum {
    name: string;
    mbid: string;
    url: string;
    image: Img[];
    artist: {
        url: string;
        name: string;
        mbid: string;
    }
}

export interface Img {
    '#text': string;
    size: string;
}

export interface IAlbumsState {
albums: IAlbum[];

}