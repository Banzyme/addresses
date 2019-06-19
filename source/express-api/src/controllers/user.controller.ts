import { Request, Response } from 'express';

export class UserController{

    fetchAllUsers(req: Request, res: Response){
        res.send("Listing all users....");
    }

    fetchUserById(req: Request, res: Response){
        res.send(`Requested details for user: ${req.params.id}`);
    }

    updateUser(req: Request, res: Response){
        res.send(`Updating for user: ${req.params.id}`);
    }

    deleteUser(req: Request, res: Response){
        res.send(`Deleting user: ${req.params.id}`);
    }

    createNewUser(req: Request, res: Response){
        res.send(`Create new user object: ${req.body}`);
    }
}