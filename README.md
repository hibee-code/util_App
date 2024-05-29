
## This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.


Retrieve Rooms


Request Method: GET
1. URL: https://util-app-c79e.onrender.com/api/rooms?limit=10&filters=[]&sort=[{"field":"name","order":"ASC"}];

          Query Parameters:
          page (number, required): The page number for pagination.
          limit (number, required): The number of items per page.
          filters (array, optional): An array of filters to apply.
          sort (array, optional): An array of sorting criteria.
          Response
          The response returns a JSON object with the following schema:

                    JSON

                    ```
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

                    ```
The data property contains an array of room objects, where each room has an id, name, capacity, and userId field. The total property represents the total number of rooms available.


                                * Query Params
                                page      0
                                limit     10
                                filters   []
                                sort    [{"field":"name","order":"ASC"}]
                                GET


                                
2. search api II
    
    Retrieve Rooms
    This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.

      
      Request Method: GET

        https://util-app-c79e.onrender.com/api/rooms?limit=5&filters=[{"field":"capacity","value":10,"operator":"gte"}]&sort=[{"field":"name","order":"ASC"}];


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
                      page          0      
                      limi          5
                      filters     [{"field":"capacity","value":10,"operator":"gte"}]
                      sort        [{"field":"name","order":"ASC"}]


3. search api III
      https://util-app-c79e.onrender.com/api/rooms?page=1&limit=2&filters=[{"field":"userId","value":1,"operator":"equals"}]&sort=[{"field":"capacity","order":"DESC"}]

              Retrieve Rooms
            This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.



                        Request Method: GET

              URL: The data property contains an array of room objects, where each room has an id, name, capacity, and userId field. The total property represents the total number of rooms available.

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
                                  page        1
                                  limit       2
                                  filters     [{"field":"userId","value":1,"operator":"equals"}]
                                  sort        [{"field":"capacity","order":"DESC"}]


4. search api IV    

    Retrieve Rooms
    This endpoint retrieves a list of rooms with optional pagination, filtering, and sorting.

Request Method: GET
URL: https://util-app-c79e.onrender.com/api/rooms?page=0&limit=5&filters=[{"field":"name","value":"Room","operator":"like"}]&sort=[{"field":"userId","order":"ASC"}]

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
page         0
limit         5
filters     [{"field":"name","value":"Room","operator":"like"}]
sort         [{"field":"userId","order":"ASC"}]
