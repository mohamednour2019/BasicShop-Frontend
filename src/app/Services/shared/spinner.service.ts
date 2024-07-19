import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class spinnerService {
    spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    showSpinner() {
        this.spinnerSubject.next(true);
    }

    hideSpinner() {
        this.spinnerSubject.next(false);
    }
}