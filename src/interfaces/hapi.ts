import Logger = require('bunyan');
import { Lifecycle, Request, ResponseToolkit, RouteOptions, ServerRoute } from 'hapi';

export interface IRequest extends Request {
  query: { [id: string]: any };
  plugins: {
    app: {
      logger: Logger
    }
  };
}

export type IHandler = (request: IRequest, h: ResponseToolkit, err?: Error) => Lifecycle.ReturnValue;

export interface IRouteOptions extends RouteOptions {
  handler: IHandler;
}

export interface IServerRoute extends ServerRoute {
  options: IRouteOptions;
}
