export class Login {
    email?: string;
    password?: string;
}



export class LoginInfo {
    user?: User
}

export class User {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    type?: string;
    image?: string;
    gender?: string;
    username?: string;
    status?: string;
    phone?: string;
    token?: string;
}
