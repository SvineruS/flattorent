import flatsJson from "./FLATS.json";
import flatsImgJson from "./FLATS_IMGS.json";

interface IFlat {
    id: number;
    address: string;
    rooms: number;
    price: number;
    description?: string;
    cond?: boolean
    disabled?: boolean;
}


export class FlatItem implements IFlat {
    id: number;
    address: string;
    rooms: number;
    price: number;
    description?: string;
    imgs: string[];
    cond: boolean

    constructor(iflat: IFlat, imgs: string[]) {
        this.id = iflat.id;
        this.address = iflat.address;
        this.rooms = iflat.rooms;
        this.price = iflat.price;
        this.description = iflat.description;
        this.cond = iflat.cond || false;
        this.imgs = imgs;
    }

    public roomsText(): string {
        return this.rooms === 1 ? "1 кімната" : this.rooms + " кімнати";
    }

    public priceText(): string {
        return this.price === 1 ? "Ціна договірна" : this.price + " грн";
    }
}

export const flats: {[flatId: number]: FlatItem} = parseFlats();

function parseFlats() {
    const flatsImgJson_ = flatsImgJson as {[flatId: number]: string[]};
    const result: {[flatId: number]: FlatItem} = {};
    for (const flat of flatsJson as IFlat[]) {
        if (flat.disabled) continue;
        const imgs = flatsImgJson_[flat.id];
        result[flat.id] = new FlatItem(flat, imgs);
    }
    return result;
}
