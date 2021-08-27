# Update Ticket

-   **Domain** `/tickets`
-   **Method** `GET`
-   **Content-Type** `application/json`

## Query Parameter

| name   | type   | description                                                          |
| ------ | ------ | -------------------------------------------------------------------- |
| status | String | สถานะของ ticket ได้แก่ `pending`, `accepted`, `resolved`, `rejected` |

## Success response

-   **Status code** `200`
-   **Json body**

```json
[
    {
        "id": "82333d73-ebff-4232-a4bf-81542ea3336c",
        "title": "เกิดปัญหากับ XXX",
        "description": "ปัญหา XXX ต้องการ Support ด่วนมาก",
        "contact": "helloworld@gmail.com",
        "status": "pending",
        "created": "2021-08-25 23:04"
    }
]
```
