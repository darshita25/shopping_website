import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-double-click-product',
  templateUrl: './double-click-product.component.html',
  styleUrls: ['./double-click-product.component.css']
})
export class DoubleClickProductComponent implements OnInit{

  @Input() product: any;

  constructor(){}

  ngOnInit(): void {
  }

  @Output() close:EventEmitter<void>=new EventEmitter<void>();

  closePopup():void{
    this.close.emit();
  }
}
