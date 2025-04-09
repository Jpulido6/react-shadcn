import { UserRole } from "src/infraestructure/database/entities/users/users.entity";

export interface IUser {
    id: number;
    email: string;
    password: string;
    role: UserRole;
    name: string;
}
export class User {

    private readonly props: IUser;
    constructor(props: IUser) {
        this.props = {
            ...props
        };
    }
    // Getters
    get id(): number {
        return this.props.id;
    }
    get email(): string {
        return this.props.email;
    }
    get password(): string {
        return this.props.password;
    }
    get role(): UserRole {
        return this.props.role;
    }
    get name(): string {
        return this.props.name;
    }

}