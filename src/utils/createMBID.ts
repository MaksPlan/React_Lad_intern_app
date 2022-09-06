import { IAlbum } from "../interface/interface";

export const createMBID = (arr: IAlbum[]) => {
let newArr =  arr.map((obj, i) => {
        obj.mbid = i.toString() + obj.name;
        return obj
    })
return newArr;
}