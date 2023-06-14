import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public productList= new BehaviorSubject<any>([])
  // act as observable and as well as used to emit the data
  public search = new BehaviorSubject<string>("")

  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  // addToCart(product : any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalAmount();
  //   console.log(this.cartItemList);
  // }
  getTotalAmount() : number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // removeCartItem(product : any){
  //   this.cartItemList.map((a:any,index:any)=>{
  //     if(product.id === a.id)
  //     this.cartItemList.splice(index,1);
  //     console.log(a.id,product.id,index);
  //   })
  //   this.productList.next(this.cartItemList);
  // }
  removeAll(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
