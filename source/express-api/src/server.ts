import app from './app';

const server = app.listen(app.get('PORT'), () => {
    console.log(
      'Address Validator API | Server running at http://localhost:%d in %s mode',
      app.get('PORT'),
      app.get('env')
    );
  });

export default server;