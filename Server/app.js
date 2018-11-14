const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express();

app.use('/graphql', graphqlHTTP({
    
}))

port=9000;
app.listen(port, () => console.log('im running'))