package com.darshitagupta.SingleprojectAccoliteShop.service;

import com.darshitagupta.SingleprojectAccoliteShop.model.modelProduct;
import com.darshitagupta.SingleprojectAccoliteShop.repository.productRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class productImplementation implements productService {

    @Autowired
    private productRepository pr;

    @Override
    public modelProduct updateStatus(modelProduct mp, Long productId) {
        if (pr.findById(productId).isPresent()) {
            modelProduct statusToBeUpdated = pr.findById(productId).get();
            statusToBeUpdated.setStatus(true);
            return pr.save(statusToBeUpdated);
        }
        return mp;
    }

    @Override
    public modelProduct updateDetail(Long productId, modelProduct mp) {
        modelProduct mpMP = pr.findById(productId).get();

        if (Objects.nonNull(mp.getTitleProduct()) &&
                !"".equalsIgnoreCase(mp.getTitleProduct())) {
            mpMP.setTitleProduct(mp.getTitleProduct());
        }
        if (Objects.nonNull(mp.getCategory()) &&
                !"".equalsIgnoreCase(mp.getCategory())) {
            mpMP.setCategory(mp.getCategory());
        }
        if (Objects.nonNull(mp.getDescription()) &&
                !"".equalsIgnoreCase(mp.getDescription())) {
            mpMP.setDescription(mp.getDescription());
        }
        if (Objects.nonNull(mp.getImageUrl()) &&
                !"".equalsIgnoreCase(mp.getImageUrl())) {
            mpMP.setImageUrl(mp.getImageUrl());
        }
        return pr.save(mpMP);
    }

    @Override
    public modelProduct saveProduct(modelProduct mp) {
        return pr.save(mp);
    }

    @Override
    public List<modelProduct> fetchProductList() {
        return pr.findAll();
    }

    @Override
    public modelProduct getProductById(Long productId) {
        return pr.findById(productId).get();
    }

    @Override
    public modelProduct addToCart(Long productId, modelProduct mp) {

        modelProduct modelProductToBeUpdated = pr.findById(productId).get();

        modelProductToBeUpdated.setStatus(true);
        modelProductToBeUpdated.setQuantity(mp.getQuantity());

        return pr.save(modelProductToBeUpdated);
    }

    @Override
    public modelProduct increaseQuantity(Long productId, modelProduct mp) {
        modelProduct modelProductToBeUpdated = pr.findById(productId).get();

        modelProductToBeUpdated.setQuantity(modelProductToBeUpdated.getQuantity() + 1);

        return pr.save(modelProductToBeUpdated);
    }

    @Override
    public modelProduct decreaseQuantity(Long productId, modelProduct mp) {
        modelProduct modelProductToBeUpdated = pr.findById(productId).get();

        if (modelProductToBeUpdated.getQuantity() > 1)
            modelProductToBeUpdated.setQuantity(modelProductToBeUpdated.getQuantity() - 1);

        return pr.save(modelProductToBeUpdated);
    }

    @Override
    public modelProduct deleteproduct(Long productId, modelProduct mp) {
        modelProduct modelProductToBeUpdated = pr.findById(productId).get();

        if (mp.getQuantity() > 0) {
            modelProductToBeUpdated.setQuantity(0L);
            modelProductToBeUpdated.setStatus(false);
        }
        return pr.save(modelProductToBeUpdated);
    }

    @Override
    public List<modelProduct> getCartProducts() {
        return pr.cartList();
    }

    @Override
    public void deleteAll() {
        List<modelProduct> entities = pr.findAll();
        for (modelProduct entity : entities) {
            entity.setQuantity(0L);
            entity.setStatus(false);
        }
        pr.saveAll(entities);
    }
}