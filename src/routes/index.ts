/*
 * @format
 */

import { Router } from "express";
import users from "./user";


const routes = Router();

// user 
routes.get('/users', users)

export default routes;