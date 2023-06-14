import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public totalCartItem : number =0;
  public searchTerm :string='';


  navbarfixed : boolean=false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 80)
    this.navbarfixed = true;
    else
    this.navbarfixed = false;
  }

  constructor(private cartService : CartService,private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.getCartProducts()
    .subscribe(res=>{
      this.totalCartItem=res.length;
    })
  }
  //   this.router.navigateByUrl('/products', {skipLocationChange:true})
    // .then(()=>window.location.reload());

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }
  showDialog = false;
  openDialog(): void {
    this.showDialog = true;
  }
  closeDialog(): void {
    this.showDialog = false;
  }
}
