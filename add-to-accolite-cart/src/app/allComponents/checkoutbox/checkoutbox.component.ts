import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-checkoutbox',
  templateUrl: './checkoutbox.component.html',
  styleUrls: ['./checkoutbox.component.css']
})
export class CheckoutboxComponent {
  
  constructor(private api:ApiService,private router:Router)
  {}

  @Output() close = new EventEmitter<void>();
  onClose(): void {
    this.close.emit();
  }
  deleteAll()
  {
    this.api.deleteAll().subscribe();
    this.router.navigateByUrl('/cart', {skipLocationChange:true})
    .then(()=>window.location.reload());
  }
}
