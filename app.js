const app = require('express')();
var swaggerUi = require('swagger-ui-express'); // swagger
swaggerDocument = require('./swagger.json');


// swagger document
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
var images = require('./api/images');
app.use('/api/v1/images',images);

app.get('/', (req, res) => {
    res.json('hello')
})
// starting the app
app.listen(process.env.PORT || 5000, function () {
    console.log('app started and listening on port 3000');
});