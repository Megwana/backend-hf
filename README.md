# HotFeet - Backend & Frontend

![RunningHero](https://res.cloudinary.com/dnkoqrvie/image/upload/v1697040192/media/images/banner_rzae6b.jpg)

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
    - [Backend Post Tests](#backend-post-tests)
    - [Backend Manual Tests](#backend-manual-testing)
  
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

### Backend Post Tests

Testing for posts was carried out on the backend. The link to view this can be seen [here](posts/tests.py)

### Backend URL Manual Testing:

`1. Home Page URL`

- **URL Pattern**: `/`
- **Test Scenario**: Accessing the home page.
- **Steps**:
  1. Open a web browser.
  2. Navigate to the root URL, `http://localhost:8000/`.
  3. Verify that the home page loads correctly.

`2. Admin Page URL`

- **URL Pattern**: `/admin/`
- **Test Scenario**: Accessing the Django admin page.
- **Steps**:
  1. Open a web browser.
  2. Navigate to the admin URL, e.g., `http://localhost:8000/admin/`.
  3. Verify that the Django admin login page is displayed.

`3. API Authentication URLs`

- **URL Pattern**: `/api/api-auth/`
- **Test Scenario**: Accessing the API authentication URLs.
- **Steps**:
  1. Open a web browser.
  2. Navigate to the API authentication URL, e.g., `http://localhost:8000/api/api-auth/`.
  3. Verify that the API authentication URLs are accessible.

`4. Logout Route`

- **URL Pattern**: `/api/dj-rest-auth/logout/`
- **Test Scenario**: Logging out from the application.
- **Steps**:
  1. Send a POST request to the `/api/dj-rest-auth/logout/` endpoint, e.g., using a tool like cURL or Postman.
  2. Verify that the user is logged out, and the response indicates a successful logout.

**drf_api url.py Results: All work as expected.**

### Bookend Backend Manual Testing:

1. Create a Bookmark

- **Test Scenario**: Creating a bookmark.
- **Testing I Have Carried Out**:
  1. Using the Django admin interface or an API endpoint, I created a new `Bookmark` instance by associating it with a `User` and a `Post`.
  2. I verified that the bookmark is created without errors.
  3. I confirmed that the `created_at` field is automatically set to the current date and time.
  4. I checked that the bookmark is associated with the correct user and post.

2. Unique Constraint

- **Test Scenario**: Ensuring the uniqueness of bookmarks.
- **Testing I Have Carried Out**:
  1. I attempted to create a new `Bookmark` instance with the same `User` and `Post` as an existing bookmark.
  2. I verified that the system prevents the creation of duplicate bookmarks.
  3. I confirmed that an error or exception is raised, indicating a violation of the unique constraint.

3. Bookmark Owner

- **Test Scenario**: Verifying the owner of a bookmark.
- **Testing I Have Carried Out**:
  1. I retrieved an existing bookmark instance.
  2. I confirmed that the `owner` attribute of the bookmark refers to the correct `User` who created it.

4. Bookmark Post

- **Test Scenario**: Verifying the bookmarked post.
- **Testing I Have Carried Out**:
  1. I retrieved an existing bookmark instance.
  2. I confirmed that the `post` attribute of the bookmark refers to the correct `Post` that was bookmarked.

5. Ordering of Bookmarks

- **Test Scenario**: Checking the ordering of bookmarks.
- **Testing I Have Carried Out**:
  1. I created multiple bookmarks with different `created_at` timestamps.
  2. I retrieved all bookmarks for a specific user.
  3. I verified that the bookmarks are ordered in descending order based on their `created_at` timestamp.

**Bookmark Results: All work as expected.**

### Comment Backend Manual Testing:

1. Create a Comment

- **Test Scenario**: Creating a comment.
- **Testing I Have Carried Out**:
  1. Using the Django admin interface or an API endpoint, I created a new `Comment` instance by associating it with a `User`, a `Post`, and providing comment content.
  2. I verified that the comment is created without errors.
  3. I confirmed that the `created_at` field is automatically set to the current date and time.
  4. I checked that the comment is associated with the correct user and post, and the content is accurate.

2. Comment Ownership

- **Test Scenario**: Verifying the owner of a comment.
- **Testing I Have Carried Out**:
  1. I retrieved an existing comment instance.
  2. I confirmed that the `owner` attribute of the comment refers to the correct `User` who created it.

3. Commented Post

- **Test Scenario**: Verifying the post that has been commented on.
- **Testing I Have Carried Out**:
  1. I retrieved an existing comment instance.
  2. I confirmed that the `post` attribute of the comment refers to the correct `Post` that the comment is associated with.

4. Comment Timestamps

- **Test Scenario**: Checking the timestamps for comments.
- **Testing I Have Carried Out**:
  1. I created multiple comments at different times.
  2. I retrieved all comments for a specific post or user.
  3. I verified that the comments are ordered in descending order based on their `created_at` timestamp.
  4. I also ensured that the `updated_at` timestamp is automatically updated when a comment is modified.

5. Comment Content

- **Test Scenario**: Verifying the content of a comment.
- **Testing I Have Carried Out**:
  1. I retrieved an existing comment instance.
  2. I confirmed that the `content` attribute of the comment contains the correct comment text.

**Comment Results: All work as expected.**

### Follow Backend Manual Testing:

1. Create a Follower Relationship

- **Test Scenario**: Creating a follower relationship.
- **Testing I Have Carried Out**:
  1. Using the Django admin interface or an API endpoint, I created a new `Follower` instance by associating it with an 'owner' (User who is following) and a 'followed' (User being followed).
  2. I verified that the follower relationship is created without errors.
  3. I confirmed that the `created_at` field is automatically set to the current date and time.
  4. I checked that the follower relationship is associated with the correct 'owner' and 'followed' users.

2. Follower and Followed Users

- **Test Scenario**: Verifying the 'owner' and 'followed' users in a Follower relationship.
- **Testing I Have Carried Out**:
  1. I retrieved an existing Follower instance.
  2. I confirmed that the `owner` attribute of the Follower instance refers to the correct 'owner' (User who is following).
  3. I confirmed that the `followed` attribute of the Follower instance refers to the correct 'followed' (User being followed).

3. Follower Relationship Timestamps

- **Test Scenario**: Checking the timestamps for Follower relationships.
- **Testing I Have Carried Out**:
  1. I created multiple Follower relationships at different times.
  2. I retrieved all Follower relationships for a specific 'owner' or 'followed' user.
  3. I verified that the Follower relationships are ordered in descending order based on their `created_at` timestamp.

4. Unique Constraint for Follower Relationships

- **Test Scenario**: Ensuring the uniqueness of Follower relationships.
- **Testing I Have Carried Out**:
  1. I attempted to create a new Follower relationship with the same 'owner' and 'followed' users as an existing relationship.
  2. I verified that the system prevents the creation of duplicate Follower relationships.
  3. I confirmed that an error or exception is raised, indicating a violation of the unique constraint.

**Follower Results: All work as expected.**

### Profile Backend Manual Testing:

1. Create a Profile

- **Test Scenario**: Creating a user profile.
- **Testing I Have Carried Out**:
  1. Using the Django admin interface or an API endpoint, I created a new `Profile` instance by associating it with a `User`.
  2. I verified that the profile is created without errors.
  3. I confirmed that the `created_at` field is automatically set to the current date and time.
  4. I checked that the profile is associated with the correct user.
  5. I ensured that the `name`, `content`, and `image` fields are saved accurately.

2. Profile Timestamps

- **Test Scenario**: Checking the timestamps for profiles.
- **Testing I Have Carried Out**:
  1. I created multiple profiles at different times.
  2. I retrieved all profiles for different users.
  3. I verified that the profiles are ordered in descending order based on their `created_at` timestamp.

### create_profile Signal

3. Trigger create_profile Signal

- **Test Scenario**: Triggering the `create_profile` signal.
- **Testing I Have Carried Out**:
  1. I registered a new `User` through the Django registration process.
  2. I verified that, upon creating the user, the `create_profile` signal was triggered.
  3. I checked that a corresponding `Profile` instance was automatically created for the new user.

4. Signal Handling for Existing User

- **Test Scenario**: Ensuring the signal handles existing users.
- **Testing I Have Carried Out**:
  1. I confirmed that creating a new `User` for an existing user did not trigger the signal.
  2. I checked that no new `Profile` was created for existing users during user creation.

**Profile Results: All work as expected.**

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
- [React Architecture](#rea)
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

For my User Stories, I have organised their importance using the MoSCoW method. This is is an acronym which stands for 'must-have', 'should-have' and 'could-have'. This method is helpful tool that I used to help prioritze my product features in this project. If you wish to know more about this method, you read more [here](https://www.techtarget.com/searchsoftwarequality/definition/MoSCoW-method).

Must-Haves = 40%
Should-Haves = 30%
Could-Haves = 20%
Won't-Haves = 10%

- Must Have

  - Authenitcation: Sign in
  - Authenitcation: Sign out
  - Authenitcation: Securely Sign up
  - Create Profile
  - Edit Profile
  - Create Post
  - Edit Post
  - Delete Post
  - Comment on Post
  - Edit Comment
  - Delete Comment
  - Like Post
  - Unlike Post
  - Posts: View all my Posts

- Should Have

  - Profile: View mine and other's profiles
  - Bookmarks: Bookmark a Post
  - Bookmarks: View a list of all my Bookmarked posts
  - Dislikes: Dislike a Post
  - Followers: Follow other users 
  - Followers: Unfollow other users
  - Followers: See a feed of only the users I follow

- Could Have

  - Posts: See Most Liked Posts
  - Bookmarks: Remove a post from my bookmarks
  - User permission levels, user/admin/visitor
  - Infinate Scroll

- Won't Have  
   - Poll posts (a future feature to grown the website)

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

Favicon:

This is the same as the logo but shoes in the tab in people's web browsers.
![Favicon](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699406378/favicon-tab_fqotnp.png)

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

![LogtoBookmark](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384201/login-to-bookmark_aqeadn.png)

![LogtoComment](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384201/login-to-comment_ppd0m4.png)

Like:

Liked Post turns Red

![LikedPost](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644441/like-dislike_koj4l7.png)

Liked Feed - To improve this in the future I want to add a redirect cabability so if a user unlikes it. The page will redirect automatically rather than a user seeing it disapear straight away until they manually refresh or go elsewhere and return. I didn't prioritise this feature as I see similar actions like this still occur on many websites. But I look to fulfill good practice moving forward. To add, this applies to the bookmark feed. 

![LikedFeed](https://res.cloudinary.com/dnkoqrvie/image/upload/v1693644445/liked-feed_rl8agh.png)

Bookmark:

When selected and Bookmarked

![Bookmarked](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384201/bookmarked_z5p7am.png)

When a bookmark is yet to be selected or is unbookmarked

![Unbookmarked](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384200/hover-bookmark_fi2i2e.png)

Empty Bookmark Feed - see how navbar bookmarked icon is highlighted red to show user is on that page.

![EmptyBookmarkFeed](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384205/no-bookmark-feed-yet_lyyb4p.png)

Bookmark Feed - see how navbar bookmarked icon is highlighted red to show user is on that page.

![BookmarkFeed](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384203/bookark-feed_g1udge.png)

Follow:

Most Followed Profiles - ranked in order of most followed profiles on the website.

![MostFollowed](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384200/follow-profiles_co2frm.png)

Following: when a user is following someone, this is what the button present as.

![Following](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407167/currentlyfollowing_ttr9d9.png)

Not Following: When a user is yet to follow somone it presents as below.

![NotFollowing](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407165/notfollowing_nufoeg.png)

Comment:

Comment section:

![CommentSection](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384207/comment-section_cef4oc.png)

Edited Comment: This show an edited version from Tom's comment in the above image.

![EditComment](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699384200/edited-comment_vk5rmu.png)

Edit and Delete Comment Options:

![EditDeleteComment](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407431/edit-delete-options-comments_oe8e0g.png)

Profile:

Standard generic profile photo when a user first signs up. See the top right.

![NoProfileImage](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407581/new-user-profile_wuey2h.png)

See how the same user profile now has a photo added.

![ProfilePicAdded](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407646/added-profile-pic_vserm9.png)

You have the ability to edit the profile, change the username or change the password with the following:

![EditProfileOptions](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407643/edit-change-profile_zikkrr.png)

Edit Profile: You have the ability to change/add a picture and change/add a bio.

![EditProfile](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407630/edit-profile-detail_e5p8p9.png)

Changed username:

![AdamWill](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699407850/changed-username_emxnny.png)

Dislike:

This is what the dislike icon looks like when someone has disliked the post.

![Dislike](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699408032/disliked_i6pqbl.png)

When a user is hovering over the dislike, it turns red

![DislikeHover](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699408032/login-dislike_glexzh.png)

When a user is yet to dislike or has clicked on the thumbs down icon if it has already been disliked it will present as a black outline with not colour within the outline. 

![Undislike](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699408032/dislikeundislike_r3m9xx.png)

## React Architecture

**Introduction**

### Reusability in React

React, a widely used JavaScript library for building user interfaces, emphasizes the concept of component reusability. Components are the building blocks of React applications, and reusing them is key to efficient development. Component reusability offers numerous advantages, such as:

1. Code Efficiency: Reusing components reduces code duplication, making it easier to manage and maintain the codebase.

2. Consistency: Using the same components across the application ensures a consistent look and behavior, contributing to a cohesive user experience.

3. Time Savings: By reusing components, developers save time since they don't need to recreate similar elements from the ground up.

### Specialist Front-End Developers' Role

Specialist Front-End developers act as the bridge between design and functionality, transforming visual concepts into interactive and user-friendly web applications. 

The Key Role of Specialist Front-End Developers are:

UI Design: Creating visually appealing and intuitive user interfaces that align with the design specifications.

UX Optimization: Ensuring a seamless and delightful user experience is a core part. This involves performance optimization, responsiveness, and accessibility.

Code Quality: Writing clean, maintainable code is essential. Ensuring the codebase is scalable and can be easily extended as the application grows. This is also important when working with teams, enabling members to follow one anothers code.

### Reuseable Components:

1. Asset Component

This component is designed to display assets, such as images, with optional features like a spinner and a message.

Reusability: I can use it wherever I need to display assets.

Use Example: Displaying images with loading spinners and messages in various parts of my website.

2. Avatar Component:

The Avatar component is designed to display user avatars with customizable height and optional text.

Reusability: I can use it to display avatars for different user profiles.

Use Example: Displaying user avatars alongside their names and profiles.

3. MoreDropdown and ProfileEditDropdown Components:

MoreDropdown is a versatile dropdown component that can be used for actions like editing and deleting.

ProfileEditDropdown is a specific dropdown component for profile-related editing action.

Reusability: These components can be used for various dropdown menus within my website.

Use Example: Implementing dropdown menus for actions like editing and deleting content or profile-related actions.

4. NavBar Component:

The NavBar component represents the navigation bar, including various navigation links and icons.

Reusability: It can be used as the consistent navigation bar across different pages.

Use Example: Providing a consistent and user-friendly navigation experience.

5. NotFound Component:

The NotFound component is used to display a standard "Page Not Found" message.

Reusability: It can be used wherever a "Page Not Found" message needs to be displayed, ensuring a consistent user experience.

Use Example: Showing the "Page Not Found" message in case of route errors.

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

**Authentication Tests:**

`User Registration:`
- **Description:** Test the registration process for new users.
- **Steps:**
    1. Navigate to the sign-up page.
    2. Fill in valid registration information.
    3. Click the "Sign Up" button.
    4. Verify successful registration and login.
- **Expected Results:** After step 4, my account should be registered, and I should be redirected to the 'sign in' page. I should then be able to successfully sign in.
- **Actual Results:** Redirected to the sign-in page, and my details have been created. Works as expected.

`Login Functionality:`
- **Description:** Test user login functionality.
- **Steps:**
    1. Go to the login page.
    2. Enter valid login credentials.
    3. Click the "Login" button.
    4. Verify successful login and redirection to the user home page.
- **Expected Results:** After step 4, I should be logged in and redirected to my home page.
- **Actual Results:** Verify that the logged-in user profile is in the top right, and the navbar changed to 'sign-out' options. Works as expected.

**Authentication Validation Tests**

`Sign-Up Blank Space Validation`

- Description:Test if blank spaces in sign-up information are appropriately flagged.
- Steps:
   1. Navigate to the sign-up page.
   2. Attempt to enter blank spaces in the username, email, and password fields.
   3. Click the "Sign Up" button.

- Expected Results: After step 3, the sign-up process should be blocked, and an error message should inform the user that blank spaces are not allowed.
- Actual Results: Verify that an error message is displayed, and the sign-up process is blocked when blank spaces are used in the input fields. Works as expected.

`Sign-Up and Signin Character Validation`

- Description: Test if minimum characters in sign-up and signin information are appropriately flagged.
- Steps:
   1. Navigate to the sign-up page.
   2. Attempt to enter username and password that is below the character minimum.
   3. Click the "Sign Up"or "signin" button.
- Expected Results: After step 3, the sign-up/signin process should be blocked, and an error message should inform the user that more characters need to be included.
- Actual Results: Verify that an error message is displayed, and the sign-up process is blocked. Works as expected.

`Registration Blank Space Validation`

- Description: Test if blank spaces in registration information are appropriately flagged.
- Steps:
   1. Log in to the user's account.
   2. Go to registration page or edit registration information.
   3. Attempt to enter blank spaces in the username and password fields.
   4. Save the changes.
- Expected Results: After step 4, the changes should not be saved, and an error message should inform the user that blank spaces are not allowed in the registration information.
- Actual Results: Verify that an error message is displayed, and the changes are not saved when blank spaces are used in the input fields. Works as expected.

`Sign-In Incorrect Password Validation`

- Description: Test if incorrect passwords during sign-in are appropriately flagged.
- Steps:
   1. Go to the sign-in page.
   2. Enter a valid username.
   3. Enter an incorrect password.
   4. Click the "Sign In" button.
- Expected Results: After step 4, the sign-in process should be blocked, and an error message should inform the user that the password is incorrect.
- Actual Results: Verify that an error message is displayed, and the sign-in process is blocked when an incorrect password is entered. Works as expected.

## Comment Tests

`Comment Creation`

- Description: Test the creation of comments on posts.
- Steps:
   1. Login into account.
   2. Navigate to a post. Click the "Comment" icon.
   3. Enter a comment in the comment box.
   4. Click "post".
- Expected Results: The comment should be successfully posted and displayed below the post.
- Actual Results: Verify that the comment is visible and associated with the correct post. Works as expected.

`Edit Comment`

- Description: Test the editing of existing comments.
- Steps:
   1. Login into account.
   2. Go to a post with my comment.
   3. Click three dots next to comment. 
   4. Click the "Edit" icon next to your comment.
   5. Edit the comment content.
   6. Click the "Save" button.
- Expected Results: The comment should be successfully edited with the new content displayed.
- Actual Results: Verify that the comment is updated with the edited content. Works as expected.

`Comment Deletion`

- Description: Test the deletion of comments on posts.
- Steps:
   1. Login into account.
   2. Go to a post with my comment.
   3. Click three dots next to comment. 
   4. Click the "Delete" trash icon next to your comment.
- Expected Results: The comment should be deleted and no longer visible.
- Actual Results: Verify that the comment is no longer displayed after deletion. Works as expected.

## Post Tests

`Post Creation`

- Description: Test the creation of new posts.
- Steps:
   1. Login into my account.
   2. Navigate to the Add Post" button in navbar.
   3. Enter post title, optional content and image.
   4. Click the "Create" button.
- Expected Results: The new post should be successfully created and displayed in the feed.
- Actual Results: Verify that the new post is visible in the home page. Works as expected.

`Edit Post`

- Description: Test the editing of existing posts.
- Steps:
   1. Login into account.
   2. Go to one of my posts.
   3. Click three dots in top right of post.
   4. Click the "Edit" icon on the post.
   5. Edit the post content or attachments.
   6. Click the "Save" button.
- Expected Results: The post should be successfully edited with the updated content and attachments.
- Actual Results: Verify that the post is updated with the edited content and attachments. Works as expected.

`Post Deletion`

- Description: Test the deletion of existing posts.
- Steps:
   1. Login to account.
   2. Go to one of your posts.
   3. Click the "Edit" icon on the post.
   4. Click the "Delete" icon on the post.
- Expected Results: The post should be deleted and no longer visible in the home page/ profile posts etc.
- Actual Results: Verify that the post is no longer displayed after deletion. Works as expected.

## Follow Tests

`Follow User`

- Description: Test the functionality of following other users.
- Steps:
   1. Login into account.
   2. Go to the profile of a user or Most Followed profiles (that shows follow button next to each user) you want to follow.
   3. Click the "Follow" button.
- Expected Results: You should be following the user, and their updates should appear in your feed.
- Actual Results: Verify that you are following the user, and their updates are in your feed. Works as expected.

`Unfollow User`

- Description: Test the functionality of unfollowing users you previously followed.
- Steps:
   1. Log in to your account.
   2. Go to the profile of a user you are following.
   3. Click the "Unfollow" button.
- Expected Results: You should no longer be following the user, and their updates should no longer appear in your feed.
- Actual Results: Verify that you are no longer following the user, and their updates are no longer in your feed. Works as expected.

`Not Follow Your Own Profile`

- Description: Test the functionality that you cannot follow yourself.
- Steps:
   1. Login into account.
   2. Go to my profile of a user or Most Followed profiles (that shows follow button next to each user).
   3. Should have no follow button available.
- Expected Results: No follow button available next to your profile but others do.
- Actual Results: Works as expected.

## Bookmark, Like, Dislike Tests

`Bookmark Post`

- Description: Test the ability to bookmark posts for later viewing.
- Steps:
   1. Login into account.
   2. Go to a post you want to bookmark.
   3. Click the "Bookmark" icon in the top right of the post.
- Expected Results: The post should be bookmarked and available in your bookmarks for future reference. Bookmark icon is now gold coloured.
- Actual Results: Verify that the post is saved in your bookmarks. Works as expected.

`Remove Bookmark`

- Description: Test the removal of bookmarked posts.
- Steps:
   1. Login into account.
   2. Go to my bookmarks.
   3. Locate the bookmarked post you want to remove.
   4. Click the "Bookmark" icon which should go back to it's unbookmarked stated with a light grey outline.
- Expected Results: The post should be removed from your bookmarks and no longer accessible there.
- Actual Results: Verify that the post is no longer in your bookmarks after removal. Works as expected.

`Like Post`

- Description: Test the ability to like posts.
- Steps:
   1. Login into account.
   2. Go to a post you want to like.
   3. Click the "Like" icon at the bottom of the post.
- Expected Results: The post should be liked, and your like should be visible.
- Actual Results: Verify that your like is recorded and visible on the post. Works as expected.

`Dislike Post`

- Description: Test the ability to dislike posts.
- Steps:
   1. Log in to your account.
   2. Go to a post you want to dislike.
   3. Click the "Dislike" icon at the bottom of the post.
- Expected Results: The post should be disliked, and your dislike should be visible.
- Actual Results: Verify that your dislike is recorded and visible on the post. Works as expected.

`Unlike and Undislike Post`

The process the unlike and undislike a post is the same as bookmark. Hover back on the heart icon (for the like) and the thumbs down icon for dislike. When you click on them they should return to black outlines with no longer a solid presenting colour. 

`Like and dislike the Same Post`

- Description: Test the ability to dislike and like the same post using the same user. 
- Steps:
   1. Log in to your account.
   2. Go to a post and try to like it, then try to dislike it (vice versa).
- Expected Results: A overlaytrigger will notify you, you can't do both.
- Actual Results: Verify that the post cannot be liked and disliked. You must undo one of the other to carry out the other. Works as expected.

**Profile Tests**

`Most Followed Avatar Links to their Profile Page`
- **Description:** Test that the most followed avatar links to their profile page.
- **Steps:**
   1. Log in to my account.
   2. Find the avatar of the user you want to select in Most Followed Profiles.
   3. Click on the avatar.
- **Expected Results:** After step 3, I should be redirected to their profile page.
- **Actual Results:** Verify that clicking on the avatar leads to their profile page. Works as expected.

`Three Dots in the Top Right of a Profile Opens Editing Options`
- **Description:** Test that clicking the three dots in the top right of a profile opens editing options.
- **Steps:**
   1. Log in to my account.
   2. Go to my user profile.
   3. Locate and click the three dots icon in the top right corner.
- **Expected Results:** After step 3, a menu with editing options should open.
- **Actual Results:** Confirm that clicking the three dots icon displays the editing options. I can't view three dot option on other users profiles, just mine. Works as expected.

`Clicking Edit Profile Routes to the Edit Page, Displaying My Current Profile and Bio Content`
- **Description:** Test that clicking "Edit Profile" on my profile page routes to the edit page and displays my current profile and bio content.
- **Steps:**
   1. Log in to my account.
   2. Go to my profile.
   3. Click "Edit Profile."
- **Expected Results:** After step 3, I should be directed to the edit page, and my current profile and bio content should be visible.
- **Actual Results:** Confirm that clicking "Edit Profile" takes me to the edit page with my current profile and bio content displayed. Works as expected.

`Clicking the Change Image Button Opens My OS Folders for Photo Upload`
- **Description:** Test that clicking the "Change Image" button allows me to upload a photo from my device.
- **Steps:**
   1. Log in to my account.
   2. Go to the edit profile page.
   3. Find and click the "Change Image" button.
- **Expected Results:** After step 3, my operating system's folders for photo upload should open.
- **Actual Results:** Confirm that clicking "Change Image" opens my OS folders for photo upload. Once saving the picture to the user it is uploaded to cloudinary. Works as expected.

### Nabar Tests

`Navigation to Home Page`

- Description: I will test the navigation to the home page by clicking the "Home" link in the navbar.
- Steps:
    1. I open the website.
    2. I locate and click on the "Home" link in the navbar.
- Expected Results: After step 2, I should be redirected to the home page of the website.
- Actual Results: I verify that I am on the home page. Works as expected.

`Navigation to Liked Page`

- Description: I will test the navigation to the "Liked" page by clicking the "Liked" link in the navbar.
- Steps:
    1. I open the website.
    2. I locate and click on the "Liked" link in the navbar.
- Expected Results: After step 2, I should be redirected to the "Liked" page, where I can view the content I have liked.
- Actual Results: I verify that I am on the "Liked" page, and it displays the liked content. Works as expected.

`Navigation to Bookmarked Page`

- Description: I will test the navigation to the "Bookmarked" page by clicking the "Bookmarked" link in the navbar.
- Steps:
    1. I open the website.
    2. I locate and click on the "Bookmarked" link in the navbar.
- Expected Results: After step 2, I should be redirected to the "Bookmarked" page, where I can view the content I have bookmarked for later.
- Actual Results: I verify that I am on the "Bookmarked" page, and it displays the bookmarked content. Works as expected.

`Navigation to Feed Page`

- Description: I will test the navigation to the "Feed" page by clicking the "Feed" link in the navbar.
- Steps:
    1. I open the website.
    2. I locate and click on the "Feed" link in the navbar.
- Expected Results: After step 2, I should be redirected to the "Feed" page, where I can view updates and content from the website.
- Actual Results: I verify that I am on the "Feed" page, and it displays the latest updates and content. Works as expected.

`Navigation to Signin Page`

- Description: I will test the navigation to the login page by clicking the "Login" link in the navbar.
- Steps:
    1. I open the website.
    2. I locate and click on the "Sign in" link in the navbar.
- Expected Results: After step 2, I should be redirected to the login page where I can enter my credentials to access my account.
- Actual Results: I verify that I am on the login page. Works as expected.

`Navigation to Signup Page`

- Description: I will test the navigation to the registration page by clicking the "Sign up" link in the navbar.
- Steps:
    1. I open the website.
    2. I locate and click on the "Sign up" link in the navbar.
- Expected Results: After step 2, I should be redirected to the registration page where I can sign up for a new account.
- Actual Results: I verify that I am on the registration page. Works as expected.

### Lighthouse Testing

Please see below some lighthouse testing I carried out on the project. Most of the scores are in a good range, the performance mainly dips due to the quality and size of the photos on the posts. I am not willing to compress the files and comprimise the quality presented on the website. 

Results:
Lighthouse Homepage

![Lighthouse Homepage](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404986/lighthouse-home_gap4rp.png)

Lighthouse Mobile Homepage

![Lighthouse Mobile Homepage](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404923/mobile-lighthouse-home_ddkjda.png)

Lighthouse Create Post

![Lighthouse Create Post](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404923/lighthouse-create_hsmebe.png)

Lighthouse Profile

![Lighthouse Profile](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404923/lighthouse-profile_rxkubm.png)

Lighthouse Feed

![Lighthouse Feed](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404924/lighthouse-feed_ay3qkt.png)

Lighthouse Liked

![Lighthouse Liked](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404924/lighthouse-liked_idxn8k.png)

Lighthouse Bookmarked

![Lighthouse Bookmarked](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404923/lighthouse-bookmarked_hyrhy4.png)

Lighthouse Mobile Profile

![Lighthouse Mobile Profile](https://res.cloudinary.com/dnkoqrvie/image/upload/v1699404923/mobile-lighthouse-profile_yxzgp2.png)


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

20. Add, commit and Push your changes to GitHub

21. Go to the deploy tab in Heroku and Click 'Deploy Branch'.

22. Wait for your build to complete (If you want, you can also click “view build log” to watch the process in a larger window)

23. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top right of the page.

24. Well done, you have successfully deployed your project to Heroku! 

## Credit and Acknowledgments

- Code institute for the general structure and using the DRF and Moments lessons to use and build the structure of this project.

- My mentor Akshat for general advice. 

- Tom Ainsworth Alumni for giving a sense of direction and advice on not making it too complicated (listening to Q&A on slack). 

- My Friends and Family for all their love and support. 
