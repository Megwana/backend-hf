# HotFeet Backend & Frontend

# Backend REAMEME

## Project Description

This repository hold the API for the full stack application HotFeet. This website is for running shoe enthusiasts who can share their own posts and see other users posts about running shoes. And interact with posts and users by liking, disliking, commenting and bookmarking posts; and following one another. It is built using Django, Django Rest Framework and React.

> Link to the backend repository (...)

## Contents
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

Logo:

Navbar:


Authentication:
- sign up
- sign in 
- sign out 
Posts:

Liked:

Bookmarks:

Feed:

Profile:

Most followed:

CRUD:

## Tests

### Post Tests

Testing for posts was carried out on the backend. The link to view this can be seen [here](posts/tests.py)

### Manual Tests

## Deployment Process

1. Log in or create an account on Heroku [Heroku.com](https://www.heroku.com/)

2. Create a new app (e.g. this project's heroku app is called hot-feet). This app name must be unique, then select your region. 

3. Select `Create app`.

4. Under resources tab search for Postgres in Add-ons section, and add Heroku Postgres to the app. Choose the 'hobby' plan for a free plan. PostgreSQL 'DATABASE_URL' will be added to the app Config Vars.

5. Install the libraries dj-database-url and psycopg2 `pip3 install dj_database_url psycopg2`

6. In settings.py file import dj_database_url

7. In settings.py add the following if statement to the 'DATABASES' variable. This is to keep the development and production environments and their databases separate.

8. Install `pip3 install django-cors-headers` and configure it in settings.py to your specifications. Ensure you add `'corsheaders.middleware.CorsMiddleware'` as high as possible in the MIDDLEWARE settings.

9. Pip install gunicorn, then create a `Procfile` in your app:

   ```python
   release: python manage.py makemigrations && python manage.py migrate
   web: gunicorn PROJECT_NAME.wsgi
   ```

   - The first line is to ensure that migrations are created and applied to the Heroku postgres database.
   - The second line tells Heroku to serve our app using gunicorn.

10. Set the ALLOWED_HOSTS in settings.py

11. In settings.py, update the CORS_ALLOWED_ORIGINS to match your desired project.

12. Add JWT_AUTH_SAMESITE = 'None' to be able to have the front end app and the API deployed to different platforms.

13. Add remaining environment variables settings to env.py file at the root directory. **Add this file to .gitignore and double check you have done so, this is crucial to protect sensitive information in your project.**

14. Replace the insecure SECRET_KEY with the environment variable in settings.py

16. Go to Settings in your Heroku and set the environment variables in the Config Vars. PostgreSQL DATABASE_URL should already be there.

17. Update the requirements.txt file to ensure the deployment doesn't fail by writing in the terminal "pip3 freeze --local > requirements.txt"

18. Git Add, Commit and Push all your changes to GitHub

19. Click the Deploy button under the deploy tab in your heroku app. 

<!-- <!-- Document the UX design work undertaken for the Front-End application, including any wireframes, mockups, diagrams, etc., created as part of the design process and its reasoning. Include diagrams created as part of the design process and demonstrate that these have been followed through to implementation.

Document all User Stories and map them to the project goals in the README file for the Front-End application.

Document Front-End libraries you have used for specific features included in the application and justify your choice in the README file for the Front-End application.

PEP8 style guide. -->

# Frontend

## Frontend Contents
- [Fronted README](#frontend)
  - [Frontend Contents](#frontend-contents)
  - [UX Design](#contents)
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
  - [Deployment Process](#deployment-process)


  ## UX Design

  ### Strategy Plane

  - My goal for this site is to create a social media platform specifically for running shoes. There are a lot of review sites out there giving long lengthy details about all the different running shoes. However, the running community is vast and everybody wants to share their actual real life experience with a pair of running shoes as everyone is different.