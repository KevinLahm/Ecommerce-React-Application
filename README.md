# Backend

This is a Backend API.
It has: Categories & Products.

## Getting Started:
* git clone the app to your machine. cd to the directory and then run the following:

Run:
```
bundle install
```
Run  the server in port (3001) - This is important coz our react app will use port 3000.
```
rails s -p 3001
```
* Run:
```
rails db:create db:migrate db:seed
```
The above command will create DB, Migrate the tables & populate the DB.

* To see the data in the db, visit:

```
http://localhost:3001/api/v1/products

http://localhost:3001/api/v1/categories
```
# Frontend

In the project directory, you can run:

### `npm start`
NB: If you encounter an error run npm install react-scripts --save then proceed with npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

NB: Make sure the backend and frontend runs in different ports as indicated

