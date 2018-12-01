const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema.js')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(cors());

//connect to mlab database
mongoose.connect('mongodb://conner:conner123@ds035250.mlab.com:35250/gql-books', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongoose db')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
   graphiql: true 
}))

port=9000;
app.listen(port, () => console.log('im running'))