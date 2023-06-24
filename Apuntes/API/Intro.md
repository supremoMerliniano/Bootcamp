# API

Is a set of definitions and protocols for building and integrating application software.

## Endpoint

Endpoints are functions available through the API. 

```sh
GET localhost:8080/employees/42
```

## Route

A route is the “name” you use to access endpoints, used in the URL. A route can have multiple endpoints associated with it, and which is used depends on the HTTP verb.

For example, with the URL `http://example.com/wp-json/wp/v2/posts/123`:

- The “route” is wp/v2/posts/123 – The route doesn’t include wp-json because wp-json is the base path for the API itself.
- This route has 3 endpoints:
  - GET triggers a get_item method, returning the post data to the client.
  - PUT triggers an update_item method, taking the data to update, and returning the updated post data.
  - DELETE triggers a delete_item method, returning the now-deleted post data to the client.

## Parameters

Are additional pieces of information you can include in an API request to provide specific details. They are typically included in the URL as query parameters or as part of the request body. They are included by using an `?` symbol. If there are multiple parameters you can include them with the `&`.

Example:

- In the endpoint https://api.example.com/users?sort=asc, the parameter "sort" is used to specify the sorting order of the user list.
- In the endpoint https://api.example.com/posts?category=tech&limit=10, the parameters "category" and "limit" are used to filter posts based on the "tech" category and limit the result to 10 posts.

