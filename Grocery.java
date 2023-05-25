package MyPack.GroceryDeliveryApp.Entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class Grocery
{
	@Id
	private long id;
	private String name;
	private long quantity;
	private String unit;
	private long price;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public Grocery(long id, String name, long quantity, String unit, long price) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.unit = unit;
		this.price = price;
	}
	public Grocery() {
		
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Grocery [id=" + id + ", name=" + name + ", quantity=" + quantity + ", unit=" + unit + ", price=" + price
				+ "]";
	}
	
	
}


