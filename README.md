# HotFeet Backend & Frontend

# Backend REAMEME

## Project Description

This repository hold the API for the full stack application HotFeet. This website is for running shoe enthusiasts who can share their own posts and see other users posts about running shoes. And interact with posts and users by liking, disliking, commenting and bookmarking posts; and following one another. It is built using Django, Django Rest Framework and React.

> **Link to the backend repository [HotFeet](https://hot-feet-86e6050a3b3d.herokuapp.com)**

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
  - [Tests](#tests)
    - [Post Tests](#post-tests)
  
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

![ERD Diagram](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693649383/ERD_Diagram_h9xld3.png)

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

CRUD:

## Tests

### Post Tests

Testing for posts was carried out on the backend. The link to view this can be seen [here](posts/tests.py)

# Frontend

## Frontend Contents
- [Fronted README](#frontend)
  - [Frontend Contents](#frontend-contents)
  - [UX Design](#contents)
    - [Strategy Plane](#strategy-plane)
    - [Scope Plane](#scope-plane)
    - [Structure Plane](#structure-plane)
      - [User Stories Frontend](#user-stories-frontend)
    - [Skeleton Plane](#skeleton-plane)
      - [Wireframes](#wireframes)
      - [Colour Scheme](#colour-scheme)
      - [Typography](#typography)
      - [Current Features Frontend](#current-features-frontend)
  - [Technology Used](#technology-used)
  - [Frontend Tests](#frontend-tests)
  - [Deployment](#deployment)
  - [Credit & Acknowledgments](#credit-and-acknowledgments)


## UX Design

### Strategy Plane

  - My goal for this site is to create a social media platform specifically for running shoes. There are a lot of review sites out there giving long lengthy details about all the different running shoes. However, the running community is vast and everybody wants to share their actual real life experience with a pair of running shoes as everyone is different.

  - Platforms like Instagram are so over stimulated to a variety of topics. Running shoes and exercise is still very popular but a site like HotFeet gives space for a large community to focus on what they are interested in and see content they want instead of everything under the sun. 

  - My Target audience is any age range that has a passion and interest in collecting, using and seeing running shoes. 

  - The Athletic footwear industry amounts to US$52.98bn. This is a running shoe specific site but after some future expansion it could be athletic footwear as a whole [See Statics Here](https://www.statista.com/outlook/cmo/footwear/athletic-footwear/worldwide).

### Scope Plane

In order to manage the workload, I have divided my focus into three categories, depending on their overall importance to reaching a **minimum viable product (MVP).**

- Must Have

  Account Authenitcation
  - Profile page
  - All posts feed
  - User posts
  - Liked post feed
  - Followed user feed
  - User followed
  - User comments
  - User likes

- Should Have

  - Infinite scroll
  - Dislike Button
  - View All Likes in on place

- Could Have

  - Bookmark for individual products
  - View all bookmarks in one place
  - User permission levels, user/admin/visitor
  - Search by brand category - Nike, Saucony, Brooks

## Structure Plane

### User Stories Frontend

Profile
- As a user, I can create a profile, so that I can have a username and profile picture when logged in.
- As a user, I can edit my profile, so that I can change my picture and other details when I want to.
- As a user, I can view mine and other's profiles so I can see what people are up to, and vice versa.

Posts
- As a user, I can create a post, to share my pictures with other users.
- As a user, I can edit a post, so that I can change the details of a post I created.
- As a user, I can delete a post, if I decide I don't want to share it any longer.
- As a user, I can view all of my posts, so that I can see everything I've created in one place.
- As a user, I can see the most liked posts, so that I can discover other users and what's popular.
- As a visitor, I can see the most recent posts, so I can find out whether I like the site or not.

Comments

- As a user, I can leave a comment on posts, so that I can talk to other users and share what I think of their posts.
- As a user, I can edit my comment, so that if I make a mistake, I can fix it.
- As a user, I can delete my comment, in case I decide that I don't want to comment any more.

Likes

- As a user, I can like posts, so that I can quickly leave positive feedback on other's posts.
- As a user, I can unlike a post, in case I change my mind or click it by accident.
- As a user I can view the total likes on each of my posts when I click on them, to see how popular they are.

Dislikes

- As a user, I can dislike posts, so that I can quickly leave negative feedback on other's posts.
- As a user, I can un-dislike a post, in case I change my mind or click it by accident.
- As a user I can view the total dislikes on each of my posts when I click on them, to see how popular they are.

Bookmarks

- As a user, I can bookmark posts, so that I can keep a log of specific posts I have take an interest in. 
- As a user, I can unbookmark a post, in case I change my mind or click it by accident.

Followers

- As a user, I can follow other users, so that I can see more of their content.
- As a user, I can unfollow other users, so that I don't have to see their posts any more.
- As a user, I can see a feed of only the users that I follow, so that I can filter the content that I enjoy the most.
- As a user, I can see how many followers I have, and how many people I follow, so that I can see how my profile is growing and how many people I'm connected to.

## Skeleton Plane

### Wireframes

All my wireframes can be seen below giving a general sense of the websites structure in all size forms. Whether it be mobile, ipad or desktop.

This is what the general structure of the main home page will look like:

![Balsmaq1](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693647945/Balsamiq-wireframe_zrilji.png)

This is what the authenitcation pages will look like:
![Balsamiq2](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693647944/auth-page_rwgwsy.png)

This is what the Post add and edit etc will look like:
![Balsamiq3](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693647944/Create-Post-Frame_kwhz1x.png)

### Colour Scheme

I wanted to keep the colour scheme very simple and clean given that running/ running shoes can be an interest for all ages etc. 

There for I have gone with a very simple monotone colour scheme with on bright red as the signalling colour. I chose red to represent the 'hot' in hotfeet. The name hotfeet is meant to represent people being 'hot' / 'passionate' about the topic. Furthermore it is meant to be a play on words for both a 'hot topic' in a social platform and 'hot' feet for all the fast runners out there.

![ColourScheme](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693648219/ColourScheme_fqk5sv.png)

### Typography

I have chosen a font that is easy to read but also has a strong bold presence. 

`font-family: 'ADLaM Display', cursive`

I aquired this font using Google Fonts.

### Current Features Frontend

Logo:
This is the websites logo, designed as a running person. When clicked it will revert a user to the home page.

![Logo](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644441/logo-home_wdtad7.png)

Sign Up:
This is the sign up page where users can sign up and once they do this it will revert them to the sign in page. 
![SignUp](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644444/sign-up_kbmqzs.png)

An additional feature is that in case they already have a log in, they can click this link below to take them there.
![SingInLink](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644441/revert-signin_nv3h4s.png)

Sign In:
The is the sign in page. Both the sign in and up forms are set to give messages if a users try's to submit the information blank, a typo of information or their password is not strong enough or not the same etc. 
![SignIn](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644441/signin-error_xskznk.png)

NavBar:

The Navbar presents differently depending on whether a user is signed in or out. If a user is not signed in, then they will not have the ability to post, like and comment etc. 
![NavBarSignedIn](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644441/navbar_zbcnbn.png)
![NavBarSignedOut](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644441/signed-out-nav_krz8h5.png)

Here is an example below of instances where a visitor will be reminded they need to sign in if they want to like a post etc.

![LogtoLike](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693645038/logtolike_i8ro0u.png)
![LogtoDislike](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693645038/logtodislike_b2djly.png)
![LogtoBookmark](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693645038/logtobookmark_vpxuno.png)

## Technology Used:

[Balsamiq](https://balsamiq.com/wireframes/?gad=1&gclid=Cj0KCQjwusunBhCYARIsAFBsUP-gDW29z3R77OhQlYdhypOTWE6HlyxD1Vbm031R_Z0JycdKz6kJEd8aAmHEEALw_wcB)

[ColourWheel](https://color.adobe.com/create/color-wheel)

[ReactBootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)

[Heroku](https://dashboard.heroku.com)

[DjangoRestFramework](https://www.django-rest-framework.org/)

[React](https://react.dev/)

[GoogleFonts](https://fonts.google.com/)

[Cloudinary](https://cloudinary.com/)

[ElephantSQL](https://www.elephantsql.com/)

[Axios](https://www.npmjs.com/package/axios)

[React-router-dom](https://www.npmjs.com/package/react-router-dom)

[Popper](https://popper.js.org/)

## Frontend Tests

### Manual Testing 

1. **User Registration:**
  - Description: Test the registration process for new users.
  - Steps:
    1. Navigate to the sign up page.
    2. Fill in valid registration information.
    3. Click the "Sign Up" button.
    4. Verify successful registration and login.
  - Expected Results: After step 4, the user should be registered and redirected to the 'sign in' page. The user should then able be able to successfully sign in. 
  - Actual Results: Redirected to sign in page now user details have been created. Works as expected.

2. **Login Functionality:**
  - Description: Test user login functionality.
  - Steps:
    1. Go to the login page.
    2. Enter valid login credentials.
    3. Click the "Login" button.
    4. Verify successful login and redirection to the user home page.
  - Expected Results: After step 4, the user should be logged in and redirected to their home page.
  - Actual Results: Verify logged in user profile is in top right and navbar changed to 'sign out' options. Works as expected.

**3. Following Someone**
- Description: Test the functionality to follow another user.
- Steps:
   1. Log in to account.
   2. Go to the profile of the user you want to follow OR the profile on 'Most Followed Profiles'.
   3. Click the "Follow" button.
- Expected Results: After step 3, you should be following the user, and their content should appear in your feed.
- Actual Results: Successully following the user, follow icon changes to unfollow and their content is visible in my feed.

**4. Unfollowing Someone**
- Description: Test the functionality to unfollow a user.
- Steps:
   1. Log in to account.
   2. Go to the profile of the user you want to follow OR the profile on 'Most Followed Profiles'.
   3. Click the "Unfollow" button.
- Expected Results: After step 3, you should no longer be following the user, and their content should not appear in your feed.
- Actual Results: Successfully unfollowed the user, 'unfollow' button changes back to 'follow' and their content is no longer visible in my feed.

**4. Liking a Post**
- Description: Test my ability to like a post.
- Steps:
   1. Log in to my account.
   2. Find a post.
   3. Click the "Like" button.
- Expected Results: After step 3, the post should show that I have liked it, and the like count should increase.
- Actual Results: Verify that the post reflects my like, and the like count increases. Works as expected.

**5. Commenting on a Post**
- Description: Test my ability to leave a comment on a post.
- Steps:
   1. Log in to my account.
   2. Find a post.
   3. Click the "Comment" button.
   4. Enter my comment and click "Submit."
- Expected Results: After step 4, my comment should be visible on the post.
- Actual Results: Check that my comment is displayed on the post. Works as expected.

**6. Editing a Post**
- Description: Test my ability to edit one of my own posts.
- Steps:
   1. Log in to my account.
   2. Find one of my posts and click on the three dots in the top right.
   3. Click the "Edit" icon.
   4. Make changes to the post and save.
- Expected Results: After step 4, my post should reflect the changes I made.
- Actual Results: Verify that my edited post shows the modifications. Works as expected.

**7. Deleting a Post**
- Description: Test my ability to delete one of my own posts.
- Steps:
   1. Log in to my account.
   2. Find one of my posts and click on the three dots in the top right.
   3. Click the "Trash" icon.
- Expected Results: After step 3, my post should be removed from the platform.
- Actual Results: Confirm that my post has been deleted. Works as expected.

**8. Editing a Comment**
- Description: Test my ability to edit one of my own comments on a post.
- Steps:
   1. Log in to my account.
   2. Find one of my comments on a post.
   3. Click the "Edit" icon.
   4. Make changes to the comment and save.
- Expected Results: After step 4, my comment should reflect the changes I made.
- Actual Results: Verify that my edited comment shows the modifications. Works as expected.

**9. Deleting a Comment**
- Description: Test my ability to delete one of my own comments on a post.
- Steps:
   1. Log in to my account.
   2. Find one of my comments on a post.
   3. Click the "Trash" icon.
- Expected Results: After step 3, my comment should be removed from the post.
- Actual Results: View that the comment has been deleted. Works as expected.

## Deployment

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

10. Set the ALLOWED_HOSTS and ClIENT_ORIGIN in settings.py

11. In settings.py, update the CORS_ALLOWED_ORIGINS to match your desired project.

12. Add JWT_AUTH_SAMESITE = 'None' to be able to have the front end app and the API deployed to different platforms.

13. Add remaining environment variables settings to env.py file at the root directory. **Add this file to .gitignore and double check you have done so, this is crucial to protect sensitive information in your project.**

14. Replace the insecure SECRET_KEY with the environment variable in settings.py

16. Go to Settings in your Heroku and set the environment variables in the Config Vars. PostgreSQL DATABASE_URL should already be there.

17. Update the requirements.txt file to ensure the deployment doesn't fail by writing in the terminal "pip3 freeze --local > requirements.txt"

18. Create a runtime.txt file containing `python-3.9.16`. 

19. Before adding, committing and pushing, please double check the steps provided in this document regarding unifying both the Frontend and Backend:

https://code-institute-students.github.io/advfe-unified-workspace/deployment/00-deployment

19. Add, commit and Push your changes to GitHub

20. Go to the deploy tab in Heroku and Click 'Deploy Branch'.

21. Wait for your build to complete (If you want, you can also click “view build log” to watch the process in a larger window)

22. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top right of the page.

23. Well done, you have successfully deployed your project to Heroku! 

## Credit and Acknowledgments

- Code institute for the general structure and using the DRF and Moments lessons to use and build the structure of this project.

- My mentor Akshat for general advice. 

- Tom Ainsworth Alumni for giving a sense of direction and advice on not making it too complicated (listening to Q&A on slack). 

- My Friends and Family for all their love and support. 
