const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema.js')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema
}))

port=9000;
app.listen(port, () => console.log('im running'))