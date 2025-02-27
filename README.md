🔥 Tasks
🍕 1. JSON Parser

Parse the following JSON structure to extract pizza details:

{
  "pizzas": [
    {
      "pizzaId": 2001,
      "pizzaName": "Margherita Pizza",
      "size": "Medium",
      "ingredients": ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
      "cookingMethod": "Baked"
    },
    {
      "pizzaId": 2002,
      "pizzaName": "Pepperoni Pizza",
      "size": "Large",
      "ingredients": ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
      "cookingMethod": "Baked"
    },
    {
      "pizzaId": 2003,
      "pizzaName": "BBQ Chicken Pizza",
      "size": "Extra Large",
      "ingredients": ["BBQ Sauce", "Chicken", "Red Onions"],
      "cookingMethod": "Grilled"
    }
  ]
}

🎯 Objectives:

    🔍 Parse the JSON object to extract pizza information.
    📋 Display the details in a user-friendly format.
    ⚠️ Handle potential parsing errors gracefully.

🚗 2. Cars Inventory Management

This task manages a car inventory system using JavaScript. The functionalities include:

    🔎 Filtering cars by brand
    ➕ Adding a new car to the inventory
    🆔 Getting car details by ID
    ❌ Removing a car from the inventory by ID
    💰 Updating the price of a car
    🔄 Updating the stock status of a car

🧪 Usage:

Uncomment the desired function calls to test each feature, such as:

//const filteredCarsByBrand = dealership.getCarsByBrand("Toyota");
//console.log(JSON.stringify(filteredCarsByBrand));

//const newCar = dealership.addCar(4, "Tesla", "Model S", 2022, 80000, true);
//console.log(JSON.stringify(newCar));

📘 3. Book Service Tests (BookServiceTests.js)

Unit tests for the bookService object using the Chai assertion library. The tests cover the following methods:

    📚 getBooks() - Retrieves all books
    ➕ addBook() - Adds a new book to the inventory
    ❌ deleteBook() - Deletes a book by its ID
    🔄 updateBook() - Updates the details of an existing book

🔎 Test Scenarios
📚 getBooks()

    ✅ Should return status 200 and an array of books.
    🔑 Verify each book includes required keys: id, title, author, year, genre.

describe("getBooks()", function () {
    it("Should return a status 200 and an array of books", function () {
        const response = bookService.getBooks();
        expect(response.status).to.equal(200);
        expect(response.data[0]).to.have.keys('id', 'title', 'author', 'year', 'genre');
        expect(response.data).to.be.an("array").with.lengthOf(3);            
    });
});

➕ addBook()

    ✅ Should add a new book successfully.
    ⚠️ Should return status 400 when adding a book with missing fields.

❌ deleteBook()

    ✅ Should delete a book by ID successfully.
    🔎 Should return status 404 when deleting a book with a non-existent ID.

🔄 updateBook()

    ✅ Should update an existing book successfully.
    🔎 Should return status 404 when updating a non-existent book.
    ⚠️ Should return status 400 when updating with incomplete book data.

⚙️ Installation

To run this project, ensure you have Node.js and Chai installed.

    🔽 Clone the repository:

git clone https://github.com/your-username/your-repository-name.git

    📦 Install dependencies:

npm install

▶️ Usage

    📂 Navigate to the project directory.
    🧪 Run the tests using the following command:

npx mocha test/BookServiceTests.js

🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
📜 License

This project is licensed under the MIT License.

Let me know if you want more customization or any other changes! 😎
