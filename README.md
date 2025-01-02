TodoAPI README
Introduction

Welcome to the TodoAPI project! This project is a simple API for managing a todo list, built with .NET Core and Angular. The backend API allows you to create, read, update, and delete (CRUD) todo items, while the frontend provides an interface for interacting with these todo items.
Features

    Create Todo: Add new tasks to your todo list.
    Read Todo: View all tasks in your todo list.
    Update Todo: Edit existing tasks to mark them as complete or update their details.
    Delete Todo: Remove tasks from your todo list.

Prerequisites

Before you begin, ensure you have the following installed on your machine:

    .NET SDK 8.0
    Node.js and npm
    Angular CLI

Getting Started

Follow these steps to set up and run the project locally:

Backend (TodoAPI)

1. Clone the repository:

    git clone https://github.com/InspectorAB/TodoAPI.git
    cd TodoAPI

2. Install .NET dependencies:
    
    dotnet restore

3. Update the Connection String:

    Open appsettings.json and update the DefaultConnection with your SQL Server connection string. 

4. Run the Database Migrations:

    dotnet ef database update

5. Run the backend API:

    dotnet run


The API should now be running at https://localhost:7121.

Frontend (TodoAngular)

 1. Navigate to the frontend directory:
    cd TodoAngular

 2. Install npm dependencies:

    npm install

 3. Update API Endpoint:

    Open src/environments/environment.ts and src/environments/environment.prod.ts.
    Update the apiUrl to https://localhost:7121/api/todoitems.

 4. Run the Angular application:

    ng serve

The frontend should now be running at http://localhost:4200

Usage

    Add Todo:
        Enter a task in the input field and click "Add Todo".
        The new task will be added to the list with a pending status.

    Update Todo:
        Click the "Edit" button next to a task to edit its details.
        Click the "Update" button to save changes.

    Delete Todo:
        Click the "Delete" button next to a task to remove it from the list.

    Mark as Complete/Incomplete:
        Click the checkbox next to a task to toggle its status between complete and pending.

Testing

To test the API and frontend, you can use tools like Postman for API requests or simply interact with the Angular frontend to verify that all functionalities are working as expected.

Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request. Contributions are welcome!


Thank you for checking out the TodoAPI project! If you have any questions or need further assistance, feel free to open an issue on GitHub. Happy coding!