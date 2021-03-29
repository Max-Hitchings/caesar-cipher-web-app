import requests
import json
import time

local = 'http://localhost:3000/detect'
url = 'https://nl-api-maxh.herokuapp.com/detect'
url2 = 'https://api.max-hitchings.com/detect'
production = 'https://nl-api.max-hitchings.com/detect'
data = {"text" : ["max", "no"]}

start_time = time.time()
request = requests.get(production, json=data)
end_time = time.time()

print(int(round((end_time-start_time)*1000, 0)), "msec")


### Method 1 ###
# Prints plain json

response = request.json()
print(response["result"])

### Method 2 ###
# Removes all null values #~#BEST OPTION#~#

response = request.json()
def remove_values_from_list(the_list, val):
   return [value for value in the_list if value != val]

for List in response["result"]:
    print(remove_values_from_list(List, None))
    
### Method 3 ###
# Prints formated json

response = request.json()
print(json.dumps(response, indent=2))