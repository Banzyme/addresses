import app from './app';

import { sequelize } from './services/sequelize.service';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const server = app.listen(app.get('PORT'), () => {
    console.log(
      'Address Validator API | Server running at http://localhost:%d in %s mode',
      app.get('PORT'),
      app.get('env')
    );
  });

export default server;