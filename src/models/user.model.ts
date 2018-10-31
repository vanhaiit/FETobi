export interface UserModel {
    email: string,
    email_confirmed: boolean,
    password: string,
    password_two: string,
    birthday: Date,
    gender: string,
    address: string,
    phone: string,
    phone_confirmed: string,
    username: string,
    avatar_user: string,
    provider: string,
}