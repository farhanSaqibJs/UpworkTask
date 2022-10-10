import { lazyLoad } from 'utils/loadable';

export const Register = lazyLoad(
  () => import('./register'),
  module => module.Register,
);

export const Login = lazyLoad(
  () => import('./login'),
  module => module.Login,
);



