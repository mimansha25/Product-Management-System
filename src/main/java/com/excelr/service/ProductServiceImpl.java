package com.excelr.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.entity.Product;
import com.excelr.exception.IdNotFoundException;
import com.excelr.exception.InValidPriceException;
import com.excelr.repository.ProductRepository;
import com.excelr.utility.AppConstant;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;
	
	
	@Override
	public Product addProduct(Product product) {
		
		if(product.getPrice()<=0)
		{
			throw new InValidPriceException(AppConstant.INAVLID_PRICE_EXCEPTION);
		}
		
		
	    Product product2=productRepository.save(product);
		return product2;
	}

	
	@Override
	public List<Product> getAllProducts() {
		 
		return productRepository.findAll();
	}
	
	

	@Override
	public Product getProductById(int id) {
	   Optional<Product> optionalProduct =  productRepository.findById(id);
	  Product product=null;
	  
	  if(optionalProduct.isPresent())
	   {
		   product= optionalProduct.get();
	   }
	  else
	  {
		  throw new IdNotFoundException(AppConstant.ID_NOT_FOUND_MESSAGE);
	  }
		
		return product;
	}

	
	
	@Override
	public String deleteProduct(int id) {
		String msg="";
		   if(productRepository.existsById(id))
		   {
			   productRepository.deleteById(id);
			   msg="product deleted";
		   }
		   else
		   {
			   throw new IdNotFoundException(AppConstant.ID_NOT_FOUND_MESSAGE);
		   }
		
		return msg;
	}

	
	
	@Override
	public String updateProduct(int id, Product product) {
		String msg="";
		   if(productRepository.existsById(id))
		   {
			    Product product2 = productRepository.findById(id).get();
			    product2.setName(product.getName());
			    product2.setPrice(product.getPrice());
			    product2.setQuantity(product.getQuantity());
			    
			    productRepository.save(product2);
			    msg="product successfull updated";
			    
		   }
		   else
		   {
			   throw new IdNotFoundException(AppConstant.ID_NOT_FOUND_MESSAGE);
		   }
		return msg;
	}

	

}
