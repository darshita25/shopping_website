import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from 'src/app/service/api.service';
import { Route, Router } from '@angular/router';
                               

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public product : any = [];
  data!:any[];
  public grandTotal : number=0;
  searchKey:string="";
  count:number=0;
  

  constructor(private cartService : CartService,private apiService: ApiService,private router:Router){}

  ngOnInit(): void{
    
    this.apiService.getCartProducts()
    .subscribe(res=>{
      this.product=res;

    
      let i=0
      for(let p of this.product)
      {
        this.grandTotal+= (this.product[i].priceProductRupees)*(this.product[i].quantity);
        i++;
      }
    })

    
    this.cartService.search.subscribe((val)=>{
      this.searchKey=val;
    })
    for(let p of this.product){
      this.grandTotal+=p.priceProductRupees;
    }
  }
  
  // getAll(){
  //   this.apiService.getCartProducts().subscribe((data)=>
  //   {
  //     this.product=data;
  //   });
  // }


  removeItem(item:any)
  {
    
    this.apiService.removeCartItem(item).subscribe();
    this.router.navigateByUrl('/cart', {skipLocationChange:true})
    .then(()=>window.location.reload());
    // this.getAll();
  }
  
  emptyCart(){
    this.apiService.deleteAll().subscribe();
    this.router.navigateByUrl('/cart', {skipLocationChange:true})
    .then(()=>window.location.reload());
  }

  addQuantity(item:any)
  {

    this.apiService.addQuantity(item).subscribe();
    // this.getAll();
    // this.apiService.getCartProducts().subscribe((data)=>
    // {
    //   this.product=data;
    // });
    this.router.navigateByUrl('/cart', {skipLocationChange:true})
    .then(()=>window.location.reload());
  }

  substractQuantity(item:any)
  {
    // console.log(item)
    // this.getAll();
    this.apiService.substractQuantity(item).subscribe();
    this.router.navigateByUrl('/cart', {skipLocationChange:true})
    .then(()=>window.location.reload());
    // this.getAll();
    // console.log(item)
  }
  showDialog = false;
  openDialog(): void {
    this.showDialog = true;
  }
  closeDialog(): void {
    this.showDialog = false;
  }
}
