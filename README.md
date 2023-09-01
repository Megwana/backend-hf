# HotFeet Backend & Frontend

## Project Description

This repository hold the API for the full stack application HotFeet. This website is for running shoe enthusiasts who can share their own posts and see other users posts about running shoes. And interact with posts and users by liking, disliking, commenting and bookmarking posts; and following one another. It is built using Django, Django Rest Framework and React.

> Link to the backend repository (...)

## Contents

- [HotFeet Backend](#crep-chat-backend)
  - [Project Description](#project-description)
  - [Contents](#contents)
  - [Main Technologies](#main-technologies)
  - [User Stories](#user-stories)
    - [Profile](#profile)
    - [Posts](#posts)
    - [Comments](#comments)
    - [Likes](#likes)
    - [Dislikes](#dislikes)
    - [Bookmarks](#bookmarks)
    - [Followers](#followers)
  - [Entity Relationship Diagram](#entity-relationship-diagram)
  - [Models and CRUD breakdown](#models-and-crud-breakdown)
  - [Development Process](#development-process)
    - [Current Features](#current-features)
  - [Tests](#tests)
    - [Post Tests](#post-tests)
    - [Manual Tests](#manual-tests)
  - [Deployment Process](#deployment-process)
  
## Main Technologies
+ HTML, CSS, JavaScript
+ React.js
+ Bootstrap.js
+ Django REST Framework

## User Stories

### Profile

- As a user, I can create a profile, so that I can have a username and profile picture when logged in.
- As a user, I can edit my profile, so that I can change my picture and other details when I want to.
- As a user, I can view mine and other's profiles so I can see more information about a user and their activity.

### Posts 

- As a user, I can create a post, to share my pictures with other users.
- As a user, I can edit a post, so that I can change the details of a post I created.
- As a user, I can delete a post, if I decide I no longer want to share it.
- As a user, I can view all of my posts, so that I can see everything I've posted in one feed.
- As a user, I can see the most liked posts, so that I can discover other users and what's popular.
- As a visitor, I can see the most recent posts, so I can find out whether I like the site or not.

### Bookmarks

- As a user, I want to bookmark a post so that I can easily find and revisit it later.
- As a user, I want to view a list of all my bookmarked posts, so that I can access my favourite content quickly.
- As a user, I want to remove post from my bookmarks, so that my bookmarks list remains relevant to my interests. 

### Likes

- As a user, I can like posts, so that I can quickly leave positive feedback on other's posts.
- As a user, I can un-like a post, in case I change my mind or click it by accident.
- As a user I can view the total likes on each of my posts when I click on them, to see how popular they are.

### Dislikes

- As a user, I can dislike posts, so that I can quickly share my opinion if I disagree with their view on the running shoe.
- As a user, I can un-dislike a post, in case I change my mind or click it by accident.

### Comments 

- As a user, I can leave a comment on posts, so that I can talk to other users and share what I think of their posts.
- As a user, I can edit my comment, so that if I make a mistake or change what I want to say, I can fix it.
- As a user, I can delete my comment, in case I decide that I no longer want the comment to be seen it can be removed.
- 
### Followers

- As a user, I can follow other users, so that I can see more of their content.
- As a user, I can unfollow other users, so that I don't have to see their posts anymore.
- As a user, I can see a feed of only the users that I follow, so that I can filter the content I find most enjoyable.
- As a user, I can see how many followers I have, and how many people I follow, so that I can see how my profile is growing and how many people I'm connected to.

## Entity Relationship Diagram

![ERD Diagram](https://github.com/Megwana/backend-hf/assets/106391440/7807490b-d2ad-4cdf-b810-57defd04aeb6)
>>>>>>> 350e77351db3de175311c4057b4c5980325136d6

## Models and CRUD breakdown

| model     | endpoints                 | create        | retrieve | update | delete | filter             | text search    |
| --------- | ------------------------- | ------------- | -------- | ------ | ------ | ------------------ | -------------- |
| users     | users/ users/:id/         | yes           | yes      | yes    | no     | no                 | no             |
| profiles  | profiles/ profiles/:id/   | yes (signals) | yes      | yes    | no     | following/followed | name           |
| posts     | posts/ posts/:id/         | yes           | yes      | yes    | yes    | profile/liked/feed | title          |
| bookmarks | bookmarks/:id/            | yes           | yes      | no     | yes    | by user            | no             |
| likes     | likes/ likes/:id/         | yes           | yes      | no     | yes    | no                 | no             |
| dislikes  | dislikes/ dislikes/:id/   | yes           | yes      | no     | yes    | no                 | no             |
| comments  | comments/ comments/:id/   | yes           | yes      | yes    | yes    | post               | no             |
| followers | followers/ followers/:id/ | yes           | yes      | no     | yes    | no                 | no             |


## Development Process

### Current Features

## Tests

### Post Tests

### Manual Tests

## Deployment Process
<!-- Document the deployment process for the Front-End application in the README file for the Front-End application.

Implement manual testing and document the procedures and results in the README file for the Front-End application.

Demonstrate an understanding of the React architecture by documenting the reuse of components in the README file for the Front-End application.

Document the UX design work undertaken for the Front-End application, including any wireframes, mockups, diagrams, etc., created as part of the design process and its reasoning. Include diagrams created as part of the design process and demonstrate that these have been followed through to implementation.

Describe what you set out to achieve in creating this application (project goals).

Document all User Stories and map them to the project goals in the README file for the Front-End application.

Document Front-End libraries you have used for specific features included in the application and justify your choice in the README file for the Front-End application.

PEP8 style guide.

TWO custom models (excluding user and profile models).

Implement manual testing and document the procedures and results in the README file for the Back-End application. -->