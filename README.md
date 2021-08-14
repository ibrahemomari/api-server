# api-server

# basic-api-server

# basic-express-server

# LAB - 02
---
### Deployment Test

###### Author: Ibrahem Alomari

* ##### [Actions](https://github.com/ibrahemomari/api-server/actions)

* ##### [Heroku](https://ibrahem-api-server.herokuapp.com/)

---
###### Setup


### `.env`
 > PORT: 8000


---

###### Running the app:

* ####  `npm start` , `nodemon`

* #### Endpoint: */food*
    * **Returns Object**

```javascript
{
    "name":"majdrah",
    "ingredients":["jameed","met"],
    "type":"jordanin"
}
```

* #### Endpoint: */food*
* **Returns Object**

```javascript
{
    "companyName":"nike",
    "color":"red",
    "type":"t-shirt"
}
```

---

#### Tests
Unit Tests: `npm run test`
Lint Tests: `npm run lint`

---

#### UML

![](digram.jpg)