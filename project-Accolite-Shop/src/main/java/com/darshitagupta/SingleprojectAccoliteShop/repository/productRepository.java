package com.darshitagupta.SingleprojectAccoliteShop.repository;

import com.darshitagupta.SingleprojectAccoliteShop.model.modelProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface productRepository extends JpaRepository<modelProduct,Long> {
    @Query(value = "select * from model_product where status = 1",nativeQuery = true)
    List<modelProduct> cartList();
}
