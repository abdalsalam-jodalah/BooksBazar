# API Documentation for Frontend Service

## Base URL
```
http://localhost:{PORT}/
```
Replace `{PORT}` with the value set in the `.env` file or default `8080`.

---

## Endpoints

### 1. **Search Items**

- **URL**: `/search/:topic`
- **Method**: `GET`
- **Description**: Searches for items related to a specified topic in the catalog service.
- **URL Parameters**:
    - `topic` (string): The topic to search for in the catalog.
- **Response**:
    - **200 OK**: Returns a list of items related to the topic.
    - **500 Internal Server Error**: Returns an error message if there is an issue with the catalog service request.
- **Example Request**:
  ```bash
  GET /search/books
  ```
- **Example Response**:
  ```json
  [
    {
      "title": "Example Book",
      "author": "Author Name",
      "year": 2023
    },
    ...
  ]
  ```

---

### 2. **Get Item Information**

- **URL**: `/info/:item_number`
- **Method**: `GET`
- **Description**: Retrieves information about a specific item.
- **URL Parameters**:
    - `item_number` (string): The unique identifier for the item.
- **Response**:
    - **200 OK**: Returns detailed information about the item.
    - **500 Internal Server Error**: Returns an error message if there is an issue with the catalog service request.
- **Example Request**:
  ```bash
  GET /info/12345
  ```
- **Example Response**:
  ```json
  {
    "title": "Example Item",
    "description": "Detailed description of the item.",
    "price": 20.99
  }
  ```

---

### 3. **Purchase Item**

- **URL**: `/purchase`
- **Method**: `POST`
- **Description**: Initiates the purchase of an item.
- **Request Body**:
    - `item_number` (string): The unique identifier for the item to purchase.
- **Response**:
    - **200 OK**: Returns a confirmation of the purchase.
    - **500 Internal Server Error**: Returns an error message if there is an issue with the order service request.
- **Example Request**:
  ```bash
  POST /purchase
  Content-Type: application/json

  {
    "item_number": "12345"
  }
  ```
- **Example Response**:
  ```json
  {
    "status": "success",
    "message": "Purchase successful for item 12345."
  }
  ```
