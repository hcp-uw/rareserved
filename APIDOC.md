# RAREserved API
This API is meant to serve as the backend of the website for RAREserved.

## Accessing pending posts
**Request Format:** /pending


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** Returns the ids of all blog posts that are pending approval by admin.


**Example Request:** /pending


**Example Response:**
```JSON
{
  "data": [3, 4, 5, 6, 7]
}
```


**Error Handling:**
A 500 status error will be returned if any unexpected conditions occur severside.

## Accessing Approved Posts
**Request Format:** /approved


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** Returns the ids of all blog posts that have recieved admin approval.


**Example Request:** /approved


**Example Response:**
```JSON
{
  "data": [1, 2, 8, 10, 14]
}
```


**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside.

## Access Blog Content
**Request Format:** /content/:id


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** Returns the content of the requested blog post given the id


**Example Request:** /content/4


**Example Response:**
```JSON
{
  "author": "Kristen Gustafson",
  "date": "01-09-2024",
  "title" : "Living with a Rare Diesease",
  "content" : " Living with a rare disease has been an isolating journey filled with uncertainties and challenges. Each day presents a new hurdle to overcome, from navigating the medical system to coping with the physical and emotional toll of symptoms."
}
```


**Error Handling:**
A 500 status error will be returned if any unexpected conditions occur severside.


## Accessing Upcoming Event Data
**Request Format:** /pending


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** 


**Example Request:**


**Example Response:**
```JSON
{
  
}
```


**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside.


## Reject a Blog Post
**Request Format:** /reject


**Request Type:** POST


**Returned Data Format** TEXT


**Description:** Allows a user to reject and remove a pending blog post from the database

**Example Request:** Body parameters: ("id" : 7)


**Example Response:**
```
{
  Blog post by Kristen Gustafson titled "I want your animal jam gems" has been rejected.
}
```
**Error Handling:** A 500 level response will be returned if an internal server error occurs.