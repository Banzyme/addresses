import app from './app';

import { sequelize } from './services/sequelize.service';
import { migrate } from './db-migration';

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successful');
    migrate();
  })
  .catch(err => {
    console.error('Database connection unsuccessful: ', err);
  });


const server = app.listen(app.get('PORT'), () => {
    console.log(
      'Address Validator API | Server running at http://localhost:%d in %s mode',
      app.get('PORT'),
      app.get('env')
    );
  });

export default server;