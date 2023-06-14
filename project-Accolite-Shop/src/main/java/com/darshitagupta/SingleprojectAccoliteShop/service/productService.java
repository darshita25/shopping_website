package com.darshitagupta.SingleprojectAccoliteShop.service;

import com.darshitagupta.SingleprojectAccoliteShop.model.modelProduct;

import java.util.List;

public interface productService {
    public modelProduct updateStatus(modelProduct mp, Long productId);

    public modelProduct updateDetail(Long productId, modelProduct mp);

    public modelProduct saveProduct(modelProduct mp);

    public List<modelProduct> fetchProductList();

    public modelProduct getProductById(Long productId);

    public modelProduct addToCart(Long productId, modelProduct mp);

    public modelProduct increaseQuantity(Long productId, modelProduct mp);

    public modelProduct decreaseQuantity(Long productId, modelProduct mp);

    public modelProduct deleteproduct(Long productId, modelProduct mp);

    public List<modelProduct> getCartProducts();

    void deleteAll();

}
