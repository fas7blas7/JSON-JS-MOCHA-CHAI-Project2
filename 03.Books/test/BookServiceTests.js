import { expect } from "chai";
import { bookService } from "../function/bookServiceObject.js";

describe("Book Service Tests", function () {

    describe("getBooks()", function () {
        // Test: Should return a status 200 and an array of books
        // 1. Verify that the response status is 200.
        // 2. Check that the first book includes the required keys: 'id', 'title', 'author', 'year', 'genre'.
        it("Should return a status 200 and an array of books", function () {
            const response = bookService.getBooks();
            //console.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.data[0]).to.have.keys('id', 'title', 'author', 'year', 'genre');
            expect(response.data[1]).to.have.keys('id', 'title', 'author', 'year', 'genre');
            expect(response.data[2]).to.have.keys('id', 'title', 'author', 'year', 'genre');
            expect(response.data).to.be.an("array").with.lengthOf(3);            
        });
    });

    describe("addBook()", function () {
        // Test: Should add a new book successfully
        // 1. Create a new valid book object.
        // 2. Verify the response status is 201 and the success message is correct.
        // 3. Verify that the newly added book is present in the book list.
        it("Should add a new book successfully", function () {
            const newBook = {
                id: "4",
                title: "The Black Obelisk",
                author: "Erich Maria Remarque",
                year: 1920,
                genre: "Fiction"
            };

            const response = bookService.addBook(newBook);
            expect(response.status).to.equal(201);
            expect(response.message).to.equal("Book added successfully.");

            const addedBook = bookService.getBooks().data;
            expect(addedBook.some(book => book.id === "4")).to.be.true;
        });
        // Test: Should return status 400 when adding a book with missing fields
        // 1. Create an invalid book object with missing fields.
        // 2. Check if the response status is 400 and the error message is "Invalid Book Data!".
        it("Should return status 400 when adding a book with missing fields", function () {
            const invalidBook = {
                id: "5",
                title: "Invalid book object",
                author: "Invalid book object 123"
            };
            const response = bookService.addBook(invalidBook);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Book Data!");
            //console.log(response)
        })
    });

    describe("deleteBook()", function () {
        // Test: Should delete a book by id successfully
        // 1. Add a book and then delete it by its ID.
        // 2. Verify the response status is 200 and the success message is correct.
        // 3. Ensure the book count returns the sum of the initial count of the books and the count of the added books from the tests
        it("Should delete a book by id successfully", function () {
            const bookForDeletion = {
                id: "6",
                title: "The Black Obelisk",
                author: "Erich Maria Remarque",
                year: 1920,
                genre: "Fiction"
            };
            bookService.addBook(bookForDeletion)

            const booksBeforeAddition = bookService.getBooks().data;
            //console.log(booksBeforeAddition)
            const initialBookCount = booksBeforeAddition.length;                 

            const response = bookService.deleteBook("6");
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book deleted successfully.");

            const booksAfterDeletion = bookService.getBooks().data;
            expect(booksAfterDeletion.length).to.equal(initialBookCount - 1);
            expect(booksAfterDeletion.some(book => book.id === "6")).to.be.false;
            //console.log(JSON.stringify(booksAfterDeletion));
        });

        // Test: Should return status 404 when deleting a book with a non-existent id
        // 1. Attempt to delete a book with a non-existent ID.
        // 2. Check that the response status is 404 and the error message is "Book Not Found!".
        it("Should return status 404 when deleting a book with a non-existent id", function () {
            const response = bookService.deleteBook("123456789");
            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Book Not Found!");
        })
    });

    describe("updateBook()", function () {
        // Test: Should update a book successfully
        // 1. Create updated data for an existing book.
        // 2. Verify the response status is 200 and the success message is correct.
        // 3. Ensure that the updated book fields reflect the new data.
        it("Should update existing book successfully", function () {
            const oldId = "1"
            const updatedBookData = {
                id: "1",
                title: "The Black Obelisk",
                author: "Erich Maria Remarque",
                year: 1920,
                genre: "Fiction"
            };
            const response = bookService.updateBook(oldId, updatedBookData);
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book updated successfully.");

            const updatedBook = bookService.getBooks().data.find(book => book.id === "1");
            expect(updatedBook).to.include.all.keys('id', 'title', 'author', 'year', 'genre');
            expect(updatedBook).to.include(updatedBookData);
            expect(updatedBook).to.deep.include(updatedBookData);

        })

        it("Should add and update a book successfully", function() {
            const bookToUpdate = {
                id: "7",
                title: "Original Title",
                author: "Original Author",
                year: 2000,
                genre: "Original Genre"
            };
            // Add book to be updated
            bookService.addBook(bookToUpdate);

            const updatedBookData = {
                id: "7",
                title: "Updated Title",
                author: "Updated Author",
                year: 2021,
                genre: "Updated Genre"
            };

            const response = bookService.updateBook("7", updatedBookData);
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book updated successfully.");

            const updatedBook = bookService.getBooks().data.find(book => book.id === "7");
            expect(updatedBook).to.include(updatedBookData);
        });
        // Test: Should return status 404 when updating a non-existent book
        // 1. Attempt to update a book that doesn't exist.
        // 2. Check that the response status is 404 and the error message is "Book Not Found!".
        it("Attempt to update a book that doesn't exist.", function () {
            const nonExistentBook = "123456789";
            const updatedBookData = {
                id: "123456789",
                title: "The Black Obelisk",
                author: "Erich Maria Remarque",
                year: 1920,
                genre: "Fiction"
            };
            const response = bookService.updateBook(nonExistentBook, updatedBookData);
            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Book Not Found!")
        });

        // Test: Should return status 400 when updating with incomplete book data
        // 1. Provide an incomplete book object with missing fields.
        // 2. Verify that the response status is 400 and the error message is "Invalid Book Data!".

        it("Should return status 400 when updating with incomplete book data", function () {
            const bookToUpdate = {
                id: "8",
                title: "The Black Obelisk",
                author: "Erich Maria Remarque",
                year: 1920,
                genre: "Fiction"                              
            };
            bookService.addBook(bookToUpdate);

            const incompleteData = {
                id:"8"
            }
            const response = bookService.updateBook("8", incompleteData);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Book Data!")
        });
    });
});