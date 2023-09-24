# Project & Portfolio 

* **RESEARCH - "Complex Sequelize"**
* **Christian Wright**
* **September 10, 2023**

<br>

## Junction model pattern: many-to-many -sequelzie 

This article provides a comprehensive guide on modeling a many-to-many relationship between Posts and Genres in a blog application using Sequelize, a popular JavaScript ORM. It begins by introducing the initial model definitions for Posts and Genres, demonstrating how these entities are structured within the Sequelize framework.

The core of the article focuses on the creation of a junction table, named TagPostGenre, to manage the relationship between Posts and Genres. It emphasizes the importance of explicitly defining this table to ensure precise control over the relationship. The article also covers the establishment of associations between the models, allowing for easy retrieval and manipulation of data. It demonstrates how to set and retrieve genres for a specific post instance and highlights the convenience methods provided by Sequelize to streamline this process. Overall, this article serves as a practical reference for developers looking to implement many-to-many relationships in their Sequelize-based applications.


<br>

## Sequelize Aggregate Functions 
The article discusses the core concepts of validations and constraints in Sequelize, a popular Node.js ORM. It explains how Sequelize allows developers to define and enforce data validations and constraints when working with database models.

The article also covers various aspects of validation, including the use of built-in validators provided by Sequelize, custom validation functions, and constraints such as unique, allowNull, and defaultValue. It also goes into the error handling functions for failed validations and how to handle validation errors gracefully in your application.

<br>

## Sequelize Aggregate Functions (SUM, COUNT, MIN, MAX, etc.) with Examples
The article provides a detailed guide on using aggregate functions in Sequelize. Aggregate functions allow developers to perform calculations on sets of data, such as finding sums, counts, minimum and maximum values, and averages using database queries.

The article also offers detailed explanations and examples of how to use Sequelize's aggregate functions in different situations. It covers functions like sequelize.fn, sequelize.col, sequelize.literal, and demonstrates how to apply them to different data models and columns. It also covers the use of groupings, sorting, and filtering in combination with aggregate functions to retrieve specific aggregated data from the database.

<br>

## Node/Express: async code and error handling

The article explores the best practices for handling asynchronous code and errors in Node.js applications with the Express framework. It talks about how to effectively manage asynchronous operations and gracefully handle errors to build robust and reliable web applications.

The article begins by emphasizing the importance of handling asynchronous code properly to prevent issues like unhandled promise rejections, which can crash Node.js applications. It then introduces the use of async/await and promises to simplify asynchronous code readability and error handling.

The article also covers error handling techniques, including using try-catch blocks to catch and manage exceptions and creating custom error handling middleware in Express to centralize error handling and provide meaningful error responses to clients.

<br>

## Sequelize Querying Basics Using findAll

This video tutorial serves as an introduction to querying a database using Sequelize's findAll method. The video instructor explains how to use Sequelize to retrieve data from a database table by utilizing the findAll method. The tutorial covers various aspects, including filtering records with conditions, ordering results, and specifying attributes to retrieve only specific columns. The instructor also demonstrates the practical application of these concepts through code examples.
