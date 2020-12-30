export class User {

    id: string;
    nombres: string;
    ap_pat: string;
    ap_mat: string;
    telefono: number;
    perfil: string;
    password: string;

    constructor(user: IUser) {
        this.id = user.id || null;
        this.nombres = user.nombres;
        this.ap_pat = user.ap_pat;
        this.ap_mat = user.ap_mat;
        this.telefono = user.telefono;
        this.perfil = user.perfil;
        this.password = user.password || "";
    }
}

interface IUser {
    id?: string,
    nombres: string;
    ap_pat: string;
    ap_mat: string;
    telefono: number;
    perfil: string;
    password?: string;
}
