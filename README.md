# Simple Webservice for german BLZs

Not production ready. Just playing around with Swagger.

## Import Data into mongodb:

mongoimport --collection blzs --db test --file data.json

## Start

npm run swagger-start

### Example Requets:

http://localhost:10010/blzs
http://localhost:10010/blzs?name=Hypo&skip=0&limit=10
http://localhost:10010/blzs?blz=70020270&limit=1000

## Edit Swagger

npm run swagger-edit
