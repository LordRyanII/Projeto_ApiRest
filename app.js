import { Express } from "express";
class App {
  constructor(){
    this.app = Express();
    this.middlewares();
    this.routes();

  }
  middlewares () {
    this.app.use(Express.urlencoded({extends : true}));
    this.app.use(Express.json());
  };
  routes () {

  };
}

export default new App().app;