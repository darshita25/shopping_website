package com.darshitagupta.SingleprojectAccoliteShop.model;

import jakarta.persistence.*;

@Entity
@Table(name = "model_product")
public class modelProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private Long productId;
     private String titleProduct;
     private Long priceProductRupees;
     private String description;
     private String category;
     private String imageUrl;
     private boolean status;
     private Long quantity;

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getTitleProduct() {
        return titleProduct;
    }

    public void setTitleProduct(String titleProduct) {
        this.titleProduct = titleProduct;
    }

    public Long getPriceProductRupees() {
        return priceProductRupees;
    }

    public void setPriceProductRupees(Long priceProductRupees) {
        this.priceProductRupees = priceProductRupees;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public modelProduct(Long productId, String titleProduct, Long priceProductRupees, String description, String category,String imageUrl) {
        this.productId = productId;
        this.titleProduct = titleProduct;
        this.priceProductRupees = priceProductRupees;
        this.description = description;
        this.category = category;
        this.imageUrl=imageUrl;
        this.status=status;
        this.quantity=quantity;
    }
    public modelProduct(){}

    @Override
    public String toString() {
        return "modelProduct{" +
                "productId=" + productId +
                ", titleProduct='" + titleProduct + '\'' +
                ", priceProductRupees=" + priceProductRupees +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", status='" + status + '\'' +
                ", quantity='" + quantity + '\'' +
                '}';
    }
}
