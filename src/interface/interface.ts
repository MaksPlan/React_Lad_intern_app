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
}

export interface IAlbumsState {
albums: IAlbum[];
}