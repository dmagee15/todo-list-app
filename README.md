# To-Do List App

User Stories

1. Allow a user to create TODO items.
2. Allow a user to mark TODO items as complete.
3. Allow a user to delete TODO items.
4. Allow a user to clear the TODO list in full.
5. Data persists between refreshes.
6. The application is responsive.

## Live App URL

[https://dmagee-todo.herokuapp.com/](https://dmagee-todo.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to have installed

```
Node.js v9.5.0 or greater
MongoDB v2.6.12 or greater
npm v5.3.0 or greater
```

### Installing

Open the command line, navigate to the directory of your choice and type:

```
git clone https://github.com/dmagee15/todo-list-app.git
```

Afterwards, install the server dependencies by entering the following in the '/todo-list-app' directory:

```
npm install
```

Aftewards, install the client-side dependencies by navigating to the '/client' folder and enter the following:

```
npm install
```

Run MongoDB in a separate command line window by navigating to where MongoDB
is installed and enter the following:

```
mongod.exe
```

In a separate window, start the server by navigating to the '/todo-list-app' directory and enter the following:

```
npm run dev
```

The project should automatically open in the browser at http://localhost:3001/