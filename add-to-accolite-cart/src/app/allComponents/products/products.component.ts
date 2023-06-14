import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public productList:any;
  public filterCategory:any;
  p:any;
  searchKey:string="";
  flag:boolean=true;

  constructor(private api:ApiService,private cartService : CartService){}

  ngOnInit():void{
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;

      this.productList.forEach((a:any) => {
        if(a.category === "men's clothing" || a.category === "women's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.priceProductRupees});
      });
    });
    this.cartService.search.subscribe((val)=>{
      this.searchKey=val;
    })
  }
  
  selectedProduct:any;
  addToCart(item : any){
    
    this.api.addToCart(item).subscribe();
  }
  showPopup=false;
  
  openPopup(product:any)
  {
    // const dialogRef=this.dialog.open(DoubleClickProductComponent);

    // dialogRef.afterClosed().subscribe(result=>{
    //   console.log('${result');

    // })
    this.selectedProduct=product;
    this.showPopup=true;
  }
  closePopup():void{
    this.showPopup=false;
  }
  filter(category:string){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category==category || category=='')
      return a;
    })
  }
  flag2:boolean=false;
  changeFlag()
  {
    this.flag2=false;
  }
  changeFlagAgain()
  {
    this.flag2=true;
  }
}
