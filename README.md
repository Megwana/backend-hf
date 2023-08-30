## Entity Relationship Diagram

![ERD Diagram](https://github.com/Megwana/backend-hf/assets/106391440/eb6efd1e-96f9-4ba8-a372-d82828a7ba7a)

## Models and CRUD breakdown

| model     | endpoints                 | create        | retrieve | update | delete | filter             | text search    |
| --------- | ------------------------- | ------------- | -------- | ------ | ------ | ------------------ | -------------- |
| users     | users/ users/:id/         | yes           | yes      | yes    | no     | no                 | no             |
| profiles  | profiles/ profiles/:id/   | yes (signals) | yes      | yes    | no     | following/followed | name           |
| likes     | likes/ likes/:id/         | yes           | yes      | no     | yes    | no                 | no             |
| dislikes  | dislikes/ dislikes/:id/   | yes           | yes      | no     | yes    | no                 | no             |
| posts     | posts/ posts/:id/         | yes           | yes      | yes    | yes    | profile/liked/feed | title          |
| bookmarks | bookmarks/:id/            | yes           | yes      | no     | yes    | by user            | no             |
| comments  | comments/ comments/:id/   | yes           | yes      | yes    | yes    | post               | no             |
| followers | followers/ followers/:id/ | yes           | yes      | no     | yes    | no                 | no             |
