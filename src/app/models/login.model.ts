export class LoginModel {
    email: string;
    password: string;
    isLogged: Boolean = false;
    role?: number;
    name?: string;
    pathPhoto?: string;
}