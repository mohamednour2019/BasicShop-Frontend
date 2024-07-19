import { Component } from '@angular/core';
import { spinnerService } from '../../Services/shared/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  constructor(private spinnerService: spinnerService) { }
  ngOnInit(): void {
    this.spinnerService.spinnerSubject.subscribe({
      next: response => {
        this.showSpinner = response
      }
    })
  }
  showSpinner: boolean;
}
