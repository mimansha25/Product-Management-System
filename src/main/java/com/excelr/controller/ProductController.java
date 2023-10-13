package com.excelr.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.entity.Product;
import com.excelr.exception.IdNotFoundException;
import com.excelr.service.ProductService;

@CrossOrigin
@RestController
//It marks a class as a web request handler.

@RequestMapping("/api/v1")
//It is used to map the web requests. It has many optional elements like consumes, header, method, name, 
//params, path, produces, and value. We use it with the class as well as the method.
public class ProductController {

	@Autowired
	//Spring provides annotation-based auto-wiring by providing @Autowired annotation.
	//It is used to autowire spring bean on setter methods, instance variable, and constructor. 
	//When we use @Autowired annotation, the spring container auto-wires the bean by matching data-type.
	ProductService productService;
	
	@PostMapping("/product")
	//It maps the HTTP POST requests on the specific handler method. 
	//It is used to create a web service endpoint that creates 
	public ResponseEntity<Product> addProduct(@RequestBody Product product)
	{
		return new ResponseEntity<Product>(productService.addProduct(product), HttpStatus.OK);
		
	}
	
	@GetMapping("/product")
	//It maps the HTTP GET requests on the specific handler method. 
	//It is used to create a web service endpoint that fetches 
	public ResponseEntity<List<Product>> getAllProducts()
	{
		return new ResponseEntity<List<Product>>(productService.getAllProducts(), HttpStatus.OK);
	}
	
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id)
	{
		return new ResponseEntity<Product>(productService.getProductById(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/product/{id}")
	// It maps the HTTP DELETE requests on the specific handler method. 
	//It is used to create a web service endpoint that deletes a resource.
	public ResponseEntity<String> deleteProduct(@PathVariable int id)
	{
		return new ResponseEntity<String>(productService.deleteProduct(id), HttpStatus.OK);
	}
	 
	@PutMapping("/product/{id}")
	// It maps the HTTP PUT requests on the specific handler method. 
	//It is used to create a web service endpoint that creates or updates
	public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestBody Product product)
	{
		return new ResponseEntity<String>(productService.updateProduct(id, product), HttpStatus.OK);
	}
	
	
	
	
}
