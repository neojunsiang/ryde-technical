# API DOCUMENTATION

## Overview

The API is organised around REST which accepts form-encoded request bodies and return JSON-encoded responses.
User data are stored in a noSQL Database, more specifically MongoDB.

## Resources

To access to the API for the database, the endpoint for the API will be `https://localhost:process.env.PORT/data`

Due to Personal Data Protection Act (PDPA), any access to the user data will be done via the object id of the database, ensuring that the data are handled with care.

Once user is at the `/data` endpoint, user will be able to perform CRUD (Create, Read, Update & Delete) to the data in the database.

1. To read or extract an user data, developer will have to access via `GET https://localhost:process.env.PORT/data/:id`

   - Return JSON response is as shown below:

```json
{
  "_id": "60dc733955d0c708452a2377",
  "name": "Peter Lim",
  "dob": "1990-01-11T00:00:00.000Z",
  "address": "18 Aljunied Rd S987654",
  "description": "Where you ryde-ing to?",
  "createdAt": "2021-06-30T13:35:53.740Z",
  "__v": 0
}
```

2. To create a new user data, developer will have to perform a `POST https://localhost:process.env.PORT/data`, following the Schema specificed for the UserData model.

   - UserData model is as such:

```node
const userDataSchema = new Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true, min: "1900-01-01" },
  address: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
```

3. To update an existing user data, developer will have to perform a `PUT https://localhost:process.env.PORT/data/:id`

4. To delete an existing user data from the database, developer will have to perform a `DELETE https://localhost:process.env.PORT/data/:id`

## Error

We use a conventional HTTP response code to indicate success or failure of an API request.
Generally, codes in `2xx` range indicate success while codes in `4xx` range indicate an error in providing a response. All error message response will be returned in json.

- For error message as shown below

```json
{
  "error": "Cast to ObjectId failed for value \"12334\" (type string) at path \"_id\" for model \"UserData\""
}
```
