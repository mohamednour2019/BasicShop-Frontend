import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { toastData } from "../../Models/toast.mode";

@Injectable({ providedIn: 'root' })
export class toast {
    parametersEmmiter = new Subject<toastData>();
    showToast(toastData: toastData) {
        this.parametersEmmiter.next(toastData);
    }
}