import { User } from "./User";

export class Session {
    token: string;
    iat: number | string;
    user: ISessionUser;

    constructor(token: string, iat: number | string, user: ISessionUser) {
        this.token = token;
        this.iat = iat;
        this.user = user;
    }
}


export interface ISessionUser {
    user_id: number | string,
    nombres: string,
    apellidos: string,
    rol: string,
}

