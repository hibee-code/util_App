http://localhost:3000/api/rooms?limit=10&filters=[]&sort=[{"field":"name","order":"ASC"}]
Retrieve Rooms
This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.

Request
Method: GET
URL: http://localhost:3000/api/rooms
Query Parameters:
page (number, required): The page number for pagination.
limit (number, required): The number of items per page.
filters (array, optional): An array of filters to apply.
sort (array, optional): An array of sorting criteria.
Response
The response returns a JSON object with the following schema:

JSON
{
  "data": [
    {
      "id": "",
      "name": "",
      "capacity": "",
      "userId": ""
    }
  ],
  "total": 0
}
The data property contains an array of room objects, where each room has an id, name, capacity, and userId field. The total property represents the total number of rooms available.


Query Params
page
0
limit
10
filters
[]
sort
[{"field":"name","order":"ASC"}]
GET
search api II
http://localhost:3000/api/rooms?limit=5&filters=[{"field":"capacity","value":10,"operator":"gte"}]&sort=[{"field":"name","order":"ASC"}]
Retrieve Rooms
This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.

Request
Method: GET
URL: http://localhost:3000/api/rooms
Query Parameters:
page (number, required): The page number for pagination.
limit (number, required): The number of items per page.
filters (array, optional): An array of filters to apply.
sort (array, optional): An array of sorting criteria.
Response
The response returns a JSON object with the following schema:

JSON
{
  "data": [
    {
      "id": "",
      "name": "",
      "capacity": "",
      "userId": ""
    }
  ],
  "total": 0
}
The data property contains an array of room objects, where each room has an id, name, capacity, and userId field. The total property represents the total number of rooms available.

﻿

Query Params
page
limit
5
filters
[{"field":"capacity","value":10,"operator":"gte"}]
sort
[{"field":"name","order":"ASC"}]
Body
raw (json)
json
{
    
}
GET
search api III
http://localhost:3000/api/rooms?page=1&limit=2&filters=[{"field":"userId","value":1,"operator":"equals"}]&sort=[{"field":"capacity","order":"DESC"}]
Retrieve Rooms
This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.

Request
Method: GET
URL: http://localhost:3000/api/rooms
Query Parameters:
page (number, required): The page number for pagination.
limit (number, required): The number of items per page.
filters (array, optional): An array of filters to apply.
sort (array, optional): An array of sorting criteria.
Response
The response returns a JSON object with the following schema:

JSON
{
  "data": [
    {
      "id": "",
      "name": "",
      "capacity": "",
      "userId": ""
    }
  ],
  "total": 0
}
The data property contains an array of room objects, where each room has an id, name, capacity, and userId field. The total property represents the total number of rooms available.

﻿

Query Params
page
1
limit
2
filters
[{"field":"userId","value":1,"operator":"equals"}]
sort
[{"field":"capacity","order":"DESC"}]
Body
raw (json)
json
{
    
}
GET
search api IV
http://localhost:3000/api/rooms?page=0&limit=5&filters=[{"field":"name","value":"Room","operator":"like"}]&sort=[{"field":"userId","order":"ASC"}]
Retrieve Rooms
This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.

Request
Method: GET
URL: http://localhost:3000/api/rooms
Query Parameters:
page (number, required): The page number for pagination.
limit (number, required): The number of items per page.
filters (array, optional): An array of filters to apply.
sort (array, optional): An array of sorting criteria.
Response
The response returns a JSON object with the following schema:

JSON
{
  "data": [
    {
      "id": "",
      "name": "",
      "capacity": "",
      "userId": ""
    }
  ],
  "total": 0
}
The data property contains an array of room objects, where each room has an id, name, capacity, and userId field. The total property represents the total number of rooms available.

﻿

Query Params
page
0
limit
5
filters
[{"field":"name","value":"Room","operator":"like"}]
sort
[{"field":"userId","order":"ASC"}]
Body
raw (json)
json
{
    
}