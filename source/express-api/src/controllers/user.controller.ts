import { Request, Response } from 'express';

export class UserController {

    static fetchAllUsers(req: Request, res: Response){
        res.send("Listing all users....");
    }

    static fetchUserById(req: Request, res: Response){
        res.send(`Requested details for user: ${req.params.id}`);
    }

    static updateUser(req: Request, res: Response){
        res.send(`Updating for user: ${req.params.id}`);
    }

    static deleteUser(req: Request, res: Response){
        res.send(`Deleting user: ${req.params.id}`);
    }

    static createNewUser(req: Request, res: Response){
        res.send(`Create new user object: ${req.body}`);
    }
}