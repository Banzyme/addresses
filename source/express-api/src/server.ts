import app from './app';

const server = app.listen(app.get("PORT"), () => {
    console.log(
      "API is running on http://localhost:%d in %s mode",
      app.get("PORT"),
      app.get("env")
    );
  });

export default server;