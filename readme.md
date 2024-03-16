# Getting Started

## Prerequisites

* Node.js installed on your machine.

## Installation

1. Clone the repository to your local machine.
2. Install dependencies by running:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and specify the port number:

```makefile
PORT=your_preferred_port_number
```

## Running the Server

To start the server, run:

```bash
npm start
```

The server will start, and you'll see a console log with the port number it's running on.

# Structure

The code is organized into folders for `controllers`, `middleware`, `routes`, and `services`, each containing TypeScript files named according to their function.
This structure is designed to support versioning and maintainability.

* Middleware: Includes global middleware for JSON response formatting and CORS handling.

* Error Handling: A basic error handler is included to catch and manage errors effectively.

* Sample Route: A hello route is provided as an example of the code organization.

# Dependencies

This boilerplate uses the following NPM packages:

* `cors`

* `dotenv`

* `express`

* `nodemon` (for development)

* `pre-commit` (for Git hooks)

* `rimraf` (for cleaning build files)

* `ts-node` (for running TypeScript files directly)

# Usage

The boilerplate is ready to be deployed to Vercel or used locally for development.
You can expand it by adding more routes, controllers, middleware, and services according to your application's needs.