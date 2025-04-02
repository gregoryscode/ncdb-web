import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private selectedItemSource: BehaviorSubject<string | null>;
    public selectedItem: Observable<string | null>;

    constructor() {
        this.selectedItemSource = new BehaviorSubject<string | null>(null);
        this.selectedItem = this.selectedItemSource.asObservable();
    }

    setSelectedItem(item: string | null) {
        this.selectedItemSource.next(item);
    }

    getSelectedItem() {
        return this.selectedItemSource.value;
    }
}