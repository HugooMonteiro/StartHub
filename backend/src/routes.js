import {Router} from 'express';

import SessionController from './controllers/SessionController';
import StartupController from './controllers/StartupController';
import DashboardController from './controllers/DashboardController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/startups', StartupController.store);

routes.put('/startups/:startup_id', StartupController.update);

routes.delete('/startups', StartupController.destroy);

routes.get('/dashboard', DashboardController.show);

export default routes;