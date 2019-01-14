import { IRouteOptions, IServerRoute } from '../interfaces/hapi';

export = class Router {
  public all: IServerRoute[];

  constructor() {
    this.all = [];
  }

  public route(route: IServerRoute) {
    this.all.push(route);
  }

  public get(path: string, options: IRouteOptions) {
    this.route({ method: 'GET', path, options });
  }

  public post(path: string, options: IRouteOptions) {
    this.route({ method: 'POST', path, options });
  }

  public del(path: string, options: IRouteOptions) {
    this.route({ method: 'DELETE', path, options });
  }

  public put(path: string, options: IRouteOptions) {
    this.route({ method: 'PUT', path, options });
  }

  public patch(path: string, options: IRouteOptions) {
    this.route({ method: 'PATCH', path, options });
  }

  public option(path: string, options: IRouteOptions) {
    this.route({ method: 'OPTION', path, options });
  }

  public routes() {
    return this.all;
  }
};
