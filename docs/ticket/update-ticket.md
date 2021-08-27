# Update Ticket

-   **Domain** `/tickets/:id`
-   **Method** `POST`
-   **Content-Type** `application/json`

## Parameter

| name | type   | description   |
| ---- | ------ | ------------- |
| id   | String | id ของ ticket |

## Body Parameter

| name        | type   | description                                                          |
| ----------- | ------ | -------------------------------------------------------------------- |
| title       | String | ชื่อ Ticket                                                          |
| description | String | คำอธิบาย Ticket                                                      |
| contact     | String | ติดต่อกลับ                                                           |
| status      | String | สถานะของ ticket ได้แก่ `pending`, `accepted`, `resolved`, `rejected` |

## Body Example

```Json
{
    "title": "เกิดปัญหากับ XXX",
    "description": "ปัญหา XXX ต้องการ Support ด่วนมาก",
    "contact": "helloworld@gmail.com",
    "status": "accepted"
}
```

## Success response

-   **Status code** `200`
-   **Json body**

```json
{
    "id": "82333d73-ebff-4232-a4bf-81542ea3336c",
    "title": "เกิดปัญหากับ XXX",
    "description": "ปัญหา XXX ต้องการ Support ด่วนมาก",
    "contact": "helloworld@gmail.com",
    "status": "pending",
    "created": "2021-08-25 23:04"
}
```
