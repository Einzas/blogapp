require('dotenv').config();
const { db } = require('./database/config');
const app = require('./app');

db.authenticate()
  .then(() => {
    console.log('Database connected 😀');
  })
  .catch((err) => {
    console.log('Error connecting to database 😞', err);
  });

db.sync({ force: true })
  .then(() => {
    console.log('Database synced 😁');
  })
  .catch((err) => {
    console.log('Error syncing database 😞', err);
  });

// Se agrega el puerto desde las variables de entorno -😁
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});