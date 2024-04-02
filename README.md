# Social-Network-API

## Description
This application is a fully functioning backend API that could be combined with a front-end UI to form a social network application.  This API allows you to create, update, and delete users, as well as get all users or a single user by id.  You can also attach thoughts, which have all of the above functionality, but they are connected to a user.  Lastly, you can add and remove reactions to other users thoughts, which are connected to a user and specific thought.
  
## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  First set up the application by opening the terminal and running npm install.  When that is finished you can start the application by running npm start. 

  ## Usage
  After you type npm run start, you will want to use insomnia to utilize each of the routes. I created a folder of all the usuable routes in the application.

  ## License
  N/A

  ## Contributing
  camwhritenour@github

  ## Video Walkthrough
  
  [The following video demonstrates the installation and function of the application.](https://drive.google.com/file/d/1195534CIzH8Qb-_uiFcYevdpdESJErKd/view)

  ## Tests
  nonr

  ## Questions
  My GitHub username: camwhritenour
  
 Reach out to me with any questions @ whritenourc@yahoo.com