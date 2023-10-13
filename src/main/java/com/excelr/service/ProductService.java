package com.excelr.service;

import java.util.List;

import com.excelr.entity.Product;

public interface ProductService {
	
	Product addProduct(Product product);
	List<Product> getAllProducts();
	Product getProductById(int id);
	String deleteProduct(int id);
	String updateProduct(int id, Product product);

}
