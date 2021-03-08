import { RouteComponentProps } from "react-router-dom";

export interface IComponent<P = {}> extends React.FC<P> {
  serverFetch?: {
    type: string,
    payload: any
  };
}

export interface IRoute {
  path: string
  title?: string
  exact?: boolean
  component: IComponent<RouteComponentProps<any>> | IComponent<any>
}