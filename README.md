# getir-assignment

# hosted on heroku server
url - `https://assignment-getir-anil.herokuapp.com/getir_case_study/fetch_records`

# commands to run
- start - `npm start`
- test - `num run test`

# endpoint
API - `https://assignment-getir-anil.herokuapp.com/getir_case_study/fetch_records`

method - POST

payload: { 
"startDate": "2016-01-26", 
"endDate": "2018-02-02", 
"minCount": 2700, 
"maxCount": 3000 
}


### API TEST COVERAGE

- We have used JEST to test our api and written few test cases.
- you can find test cases at- test (integration/ unit_test)


## Error Codes

| Error Code  | Explanation  |
| ------------- | -----------
| 0  | Success |
| 400  | Validation Error | 
| 500  | Internal Server Error | 
| 404 | Not Found |


## Mongo Database :

- name - `getir-case-study`
- URI - `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`
- Collection - `records`