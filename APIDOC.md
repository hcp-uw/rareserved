# RAREserved API
This API is meant to serve as the backend of the website for RAREserved.

## Accessing Posts
**Request Format:** /blog/:status


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** Returns an array containing all of the blog posts that are pending or approved depending on input Each blog post object will contain an author, date, day, title and content.


**Example Request:** /blog/:pending


**Example Response:**
```JSON
{
  "data": [
    {
      "id" : "9",
      "author": "Kristen Gustafson",
      "date": "01-09-2024",
      "title" : "Living with a Rare Diesease",
      "content" : " Living with a rare disease has been an isolating journey filled with uncertainties and challenges. each day presents a new hurdle to overcome, from navigating the medical system to coping with the physical and emotional toll of symptoms."
    },
    {
      "id" : "10",
      "author": "Sally Barnes",
      "date": "01-20-2024",
      "title" : "Unveiling the Enigma: The Journey of Diagnosing a Rare Disease",
      "content" : "In the labyrinth of medical mysteries, there exists a category of illnesses that elude easy identification: rare diseases. These conditions, affecting fewer than 200,000 people in the United States, often pose significant challenges in diagnosis due to their obscure symptoms and limited research. Patients grappling with a rare disease find themselves navigating a daunting landscape of medical consultations, tests, and uncertainties as they seek answers and validation for their often misunderstood ailments."
    },
    {
      "id" : "11",
      "author": "Robbert Redd",
      "date": "03-21-2024",
      "title" : "The Hidden Realities of Hospital Stays: Navigating Care in a Complex Environment",
      "content" : "Hospital stays represent a pivotal moment in the healthcare journey, yet behind the sanitized corridors and bustling activity lies a world of profound challenges and experiences. From the initial admission process to the intricacies of treatment plans, patients find themselves thrust into an unfamiliar environment where every interaction, procedure, and decision carries weight. Beyond the physical discomfort, hospital stays often entail emotional turbulence, as individuals grapple with uncertainty, vulnerability, and the disruption of their daily lives."
    }
  ]
}
```


**Error Handling:**
A 500 status error will be returned if any unexpected conditions occur severside.

## Accessing Event Data
**Request Format:** /events/:time


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** Returns an array with all events after a given date, or if the client passes "archived" all events that have been completed will be returned.


**Example Request:** /events/04012024

**Example Response:**
```JSON
{
  "data": [
    {
      "location": "HUB Ballroom",
      "date": "04-20-2024",
      "time-range": "14:30:00-17:30:00",
      "title" : "Fundraiser",
      "content" : "Come join us at the HUB and get some cupcakes to support our club! See you there!",
      "secondary" : "Make sure to bring cash or a valid venmo!",
      "address" : "4001 E Stevens Way NE",
      "picture" : "https://picture-at-mysql"
    },
    {
      "location": "CSE2 G04",
      "date": "04-29-2024",
      "time": "12:30:00-14:00:00",
      "title" : "Guest Speaker",
      "content" : "Come join us to hear our special guest speaker talk about emerging topics in the rare diesease community.",
      "secondary" : "Feel free to come 30 minutes eary for a mini meet and greet.",
      "address" : "University of Washington, 3800 E Stevens Way NE, Seattle, WA 98195",
      "picture" : "https://picture-at-mysql"
    }
  ]
}
```


**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside. If an invalid date is requested a 400 status error will be returned.

## Accessing Organization Data
**Request Format:** /organizations


**Request Type:** GET


**Returned Data Format**: JSON


**Description:** Returns an array with several different organizations that the admin has added to the page. Each organization contains a title, information, city, link and a link to the logo of the organizaiton. 


**Example Request:** /organizations

**Example Response:**
```JSON
{
  "data": [
    {
      "title" : "RARE Helpers",
      "information" : "RARE Helpers is a non profit organization based in Seattle that provides support and resources to children struggling with rare diesease diagnoses. Please check them out and support the cause!",
      "city" : "Seattle, WA",
      "link" : "https://RAREHelps/donate.org",
      "logo" : "https://picture-at-mysql"
    }
  ]
}
```


**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside.

## Reject a Blog Post
**Request Format:** /reject


**Request Type:** POST


**Returned Data Format** TEXT


**Description:** Allows a user to reject and remove a pending blog post from the database.

**Example Request:** Body parameters: ("id" : 7)


**Example Response:**
```
{
  Blog post by Kristen Gustafson titled "I want your animal jam gems" has been rejected.
}
```
**Error Handling:** A 500 level response will be returned if an internal server error occurs.