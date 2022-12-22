import { Books } from "@prisma/client";

export interface UserProps {
    email: string;
    password: string;
    books: Books[]
}

export class User {
    props: UserProps
    constructor(props: UserProps) {
        this.props = props
    }

    public get email() {
        return this.props.email;
    }

    public set email(email: string) {
        this.props.email = this.email
    }

    public get password() {
        return this.props.password;
    }

    public set password(password: string) {
        this.props.password = this.password
    }

    public get books() {
        return this.props.books;
    }

    public set books(books: Books[]) {
        this.props.books = this.books
    }

}