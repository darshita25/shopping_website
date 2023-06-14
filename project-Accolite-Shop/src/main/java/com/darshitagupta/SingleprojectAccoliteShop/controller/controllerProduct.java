package com.darshitagupta.SingleprojectAccoliteShop.controller;

import com.darshitagupta.SingleprojectAccoliteShop.model.modelProduct;
import com.darshitagupta.SingleprojectAccoliteShop.service.productImplementation;
import com.darshitagupta.SingleprojectAccoliteShop.service.productService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/accolite/shop")
public class controllerProduct {
    @Autowired
    private productService ps;
    @PostMapping("/accoliteShops")
    public modelProduct saveProduct(@RequestBody modelProduct mp){
        return ps.saveProduct(mp);
    }
    @GetMapping("/accoliteShop")
    public List<modelProduct> fetchProductList(){
        return ps.fetchProductList();
    }
    @PutMapping("/productUpdate/{productId}")
    public modelProduct updateDetail(@PathVariable("productId") Long productId,@RequestBody modelProduct mp){
        return ps.updateDetail(productId,mp);
    }
    @GetMapping("/getProduct/{productId}")
    public modelProduct getProductById(@PathVariable("productId")Long productId){
        return ps.getProductById(productId);
    }
    @PutMapping("/updateStatus/{productId}")
    public ResponseEntity<modelProduct> updateStatus(@PathVariable("productId") Long productId, @RequestBody modelProduct mp)  {
        return new ResponseEntity<modelProduct>(ps.updateStatus(mp, productId), HttpStatus.ACCEPTED);
    }

    @PutMapping("/addtocart/{productId}")
    public ResponseEntity<modelProduct> addToCart(@PathVariable("productId") Long productId, @RequestBody modelProduct mp){
        return new ResponseEntity<modelProduct>(ps.addToCart(productId, mp), HttpStatus.OK);
    }

    @PutMapping("/addquantity/{productId}")
    public ResponseEntity<modelProduct> increaseQuantity(@PathVariable("productId") Long productId, @RequestBody modelProduct mp){
        return new ResponseEntity<modelProduct>(ps.increaseQuantity(productId, mp), HttpStatus.OK);
    }

    @PutMapping("/substractquantity/{productId}")
    public ResponseEntity<modelProduct> decreaseQuantity(@PathVariable("productId")Long productId, @RequestBody modelProduct mp){
        return new ResponseEntity<modelProduct>(ps.decreaseQuantity(productId,mp), HttpStatus.OK);
    }
    @PutMapping("/deleteProduct/{productId}")
    public ResponseEntity<modelProduct> deleteProduct(@PathVariable("productId")Long productId, @RequestBody modelProduct mp){
        return new ResponseEntity<modelProduct>(ps.deleteproduct(productId,mp),HttpStatus.OK);
    }
    @GetMapping("/getCartProducts")
    public List<modelProduct> getCartProduct(){
        return ps.getCartProducts();
    }
    @PutMapping("/deleteAll")
    public void deleteAll(){
        ps.deleteAll();
    }
}
