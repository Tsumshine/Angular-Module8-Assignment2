import {Role} from '../_models/role'

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;   
    role: Role;
    token?: string;
}