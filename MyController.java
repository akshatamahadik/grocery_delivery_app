package MyPack.GroceryDeliveryApp.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import MyPack.GroceryDeliveryApp.Entities.Grocery;
import MyPack.GroceryDeliveryApp.Services.GroceryService;
@RestController
@CrossOrigin(allowedHeaders ="*")
public class MyController 
{

	@Autowired
	private GroceryService groceryService;
	@GetMapping("/home")
	private String Home() 
	{
		return "WelCome To Grocery Delivery Application";
	}

	@GetMapping("/groceries")
	 private List<Grocery> getGrocery()
	{
		 
		return this.groceryService.getGrocery();
	}

	@GetMapping("/groceries/{groceryId}")
	public Grocery getGrocery(@PathVariable String groceryId) 
	{
		return this.groceryService.getGrocery(Long.parseLong(groceryId));
	}

	@PostMapping("/groceries")
	public Grocery addgGrocery(@RequestBody Grocery grocery) 
	{
		return this.groceryService.addGrocery(grocery);
	}

	@PutMapping("/groceries")
	public Grocery updateGrocery(@RequestBody Grocery grocery) 
	{
		return this.groceryService.updateGrocery(grocery);
	}

	@DeleteMapping("/groceries/{groceryId}")
	public void deleteGrocery(@PathVariable String groceryId) 
	{
		this.groceryService.deleteGrocery(Long.parseLong(groceryId));
	}


}
