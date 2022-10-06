import { lazyLoad } from 'utils/loadable';

export const Registration = lazyLoad(
  () => import('./register'),
  module => module.Register,
);

export const Login = lazyLoad(
  () => import('./login'),
  module => module.Login,
);

export const Plans = lazyLoad(
  () => import('./plans'),
  module => module.Plans,
);



