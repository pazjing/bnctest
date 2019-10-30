Feature: The API is my homework
  I would like to know the response from API has 30 items
  
  Scenario: 30 items returned in response 
    Given The API endpoint is "https://bravenewcoin.com/system/api/content/pageInsight?skip=0&limit="
    When I send number 30 in request 
    Then it should get 30 items
    Then in each item it should has "fields" object with a "title" defined
