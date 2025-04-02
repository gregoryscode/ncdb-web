import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StringService {
    constructor() {
    }

    toFirstLetterUpperCase(item: string) {
        if (!item) {
            return item;
        }

        return item[0].toUpperCase() + item.substring(1).toLowerCase();
    }
}