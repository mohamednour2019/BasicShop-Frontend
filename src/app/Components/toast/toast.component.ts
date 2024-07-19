import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { toastData } from '../../Models/toast.mode';
import { toast } from '../../Services/shared/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnDestroy {
  toasts: toastData
  toastSubscription: Subscription
  toastState;
  constructor(private toast: toast) { }
  ngOnInit(): void {
    this.toastSubscription = this.toast.parametersEmmiter.subscribe(
      toast => {
        this.toasts = toast
        setTimeout(() => {
          this.toasts = null;
        }, this.toasts.timeout || 5000);
      }
    )
  }

  ngOnDestroy(): void {
    this.toastSubscription.unsubscribe();
  }
}
