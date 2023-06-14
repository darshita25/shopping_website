import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  @Output() close = new EventEmitter<void>();
  onClose(): void {
    this.close.emit();
  }
}
