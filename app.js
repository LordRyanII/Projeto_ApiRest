import Express from "express";
import homeRoutes from './src/routes/homeRoutes'
class App {
  constructor(){
    this.app = Express();
    this.middlewares();
    this.routes();

  };
  middlewares () {
    this.app.use(Express.urlencoded({extends : true}));
    this.app.use(Express.json());
  };
  routes () {
    this.app.use('/', homeRoutes);
  };
}

export default new App().app;