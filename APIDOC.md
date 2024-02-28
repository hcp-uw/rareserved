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

## Review a Blog Post
**Request Format:** /review


**Request Type:** POST


**Returned Data Format** TEXT


**Description:** Allows a client to review a given blog post by either rejecting or accepting that blog post. If rejected it will be removed from the database a a message saying "Blog post by (AUTHOR) titled "(TITLE)" has been rejected.". If it is accepted it will be categorized as accepted in the database and there will be a response of "Blog post by (AUTHOR) titled "(TITLE)" has been approved.". There will be two body parameters. One is the id of the post, and the second is whether or not the blog has been accepted (0 for true and 1 for false).

**Example Request:** Body parameters: ("id" : 7, "accepted" : 0)


**Example Response:**
```
{
  Blog post by Kristen Gustafson titled "I want your animal jam gems" has been rejected.
}
```

## Add or Edit an Event
**Request Format:** /event


**Request Type:** POST


**Returned Data Format** TEXT


**Description:** Allows a client to add or edit an event in the database. There will be 8 body parameters. The maximum amount of information needed for an event is the location, date, time range, title, content, secondary content, address and picture. The only required paramter is the title and date. To edit an event call a paramter call with the id number of the event and add any information that is being changed in the parameter body. Below are some formatting notes for the information:

Date
: MM-DD-YYY

Time (Miliatary Time)
: HH:MM-HH:MM

Picture
: Valid URL

**Example Request:** Body parameters: ("location" : "HUB Ballroom","date": "04-20-2024", "time-range": "14:30-17:30", "title" : "Fundraiser", "content" : "Come join us at the HUB and get some cupcakes to support our club! See you there!", "secondary" : "Make sure to bring cash or a valid venmo!", "address" : "4001 E Stevens Way NE", "picture" : "https://picture-at-mysql")


**Example Response:**
```

  Event titled Fundraiser on April 20th, 2024 has been added as an event!

```

**Example Request:** Body parameters: ("id" : 7, "date" : "05-20-2024", "secondary" : "Cupcakes are free!")


**Example Response:**
```

  Event titled "Fundraiser": changed date to 05-20-2024, changed secondary to "Cupcakes are free!"

```

**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside.

## Add or Edit an Organization
**Request Format:** /org


**Request Type:** POST


**Returned Data Format** TEXT


**Description:** Allows a client to add or edit an organization in the database. There will be 5 body parameters. The maximum amount of information allowed for an organization is the title, description, website link, city and picture. Only the title is required, and there will be no duplicate titles allowed. To edit an orgnization call this endpoint with the title of the organization and add any information that is being changed in the parameter body.

**Example Request:** Body parameters: ("title" : "RAREHelpers", "content": "RAREHelpers is a Seattle based orgnization that aims to help students with rare dieseases with college tution", "link" : "https://RAREHelpers.org")


**Example Response:**
```

  Organization named "RAREHelpers has been added"!

```

**Example Request:** Body parameters: ("title" : "RAREHelpers", "content" : "RAREHelpers is an organizationt that excepts donations")


**Example Response:**
```

  Organization named "RAREHelpers": changed city to "Kirkland, WA"

```

**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside. A 400 level error will be returned if a duplicate title is entered.

## Add or Edit an Article
**Request Format:** /article


**Request Type:** POST


**Returned Data Format** TEXT


**Description:** Allows a client to add or edit an article in the database. There will be 5 body parameters. The maximum amount of information allowed for an article is the date, author, content and picture. All of these parameters are required except for the picture. To edit an article call this endpoint with the id number of the article and add any information that is being changed in the parameter body. You are not allowed to change the date. Below are some formatting notes for the information:

Date
: MM-DD-YYY

**Example Request:** Body parameters: ("title" : "You should care", "content": "Why you should care aboout this topic is because it is a very important topic.", "author" : "Angel")


**Example Response:**
```

  Article titled "You should care" by Angel has been added!

```

**Example Request:** Body parameters: ("id" : 7, "date" : "title" : "You really really should care")


**Example Response:**
```

  Article titled "You should care": changed title to "You should really really care"

```

**Error Handling:** A 500 status error will be returned if any unexpected conditions occur severside. A 400 level error will be returned if the date is attempted to be changed.

