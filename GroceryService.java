package MyPack.GroceryDeliveryApp.Services;
import java.util.List;

import MyPack.GroceryDeliveryApp.Entities.Grocery;


public interface GroceryService
{
    public List<Grocery> getGrocery();
	
	public Grocery getGrocery(long groceryId);
	
	public Grocery addGrocery(Grocery grocery);
	
	public Grocery updateGrocery(Grocery grocery);

	public void deleteGrocery(long parseLong);


}