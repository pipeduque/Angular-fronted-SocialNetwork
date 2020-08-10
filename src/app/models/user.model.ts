export class UserModel {
    id?: string;
    firstName: string;
    secondName?: string;
    surname: string;
    secondSurname?: string;
    cellphone: string;
    gender: string;
    email: string;
    password: string;
    birthday: Date;
    pathPhoto?: string;
    interests?: [];
    role?: number;
}