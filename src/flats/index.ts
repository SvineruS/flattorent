export interface IFlat {
    id: number;
    address: string;
    rooms: number;
    price: number;
    description?: string;
}


export class FlatItem implements IFlat {
    id: number;
    address: string;
    rooms: number;
    price: number;
    description?: string;

    constructor(iflat: IFlat) {
        this.id = iflat.id;
        this.address = iflat.address;
        this.rooms = iflat.rooms;
        this.price = iflat.price;
        this.description = iflat.description;
    }

    public roomsText(): string {
        return this.rooms === 1 ? "Однокімнатна" : this.rooms + "-кімнатна";
    }

    public priceText(): string {
        return this.price === 1 ? "Договірна" : this.price + " грн";
    }
}

export const flats: {[flatId: number]: FlatItem} = parseFlats();

function parseFlats() {
    const flatsJson = require("./FLATS.json") as IFlat[];
    const result: {[flatId: number]: FlatItem} = {};
    for (const flat of flatsJson)
        flatsJson[flat.id] = new FlatItem(flat);
    return result;
}
