import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("accolite/shop/accoliteShop").pipe(map((res:any)=>{
      return res;
    }))
  }
  getCartProducts(){
    return this.http.get<any>("accolite/shop/getCartProducts").pipe(map((res:any)=>{
      return res;
    }))
  }

  addToCart(item:any):Observable<any>{
    return this.http.put<any>(`accolite/shop/addtocart/${item.productId}`,item);
  }
  
  addQuantity(item:any):Observable<any>
  {
    return this.http.put<any>(`accolite/shop/addquantity/${item.productId}`,item);
  }

  substractQuantity(item:any):Observable<any>
  {
    return this.http.put<any>(`accolite/shop/substractquantity/${item.productId}`,item);
  }

  removeCartItem(item:any):Observable<any>
  {
    return this.http.put<any>(`accolite/shop/deleteProduct/${item.productId}`,item);
  }
  deleteAll():Observable<any>
  {
    return this.http.put<any>(`accolite/shop/deleteAll`,{});
  }
}
