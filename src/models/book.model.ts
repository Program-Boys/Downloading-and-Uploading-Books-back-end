export interface BooksProps {
  name: string;
  gender: string;
}

export class Books {
  constructor({ name, gender }: BooksProps) {
    this.name = name;
    this.gender = gender;
  }
  public get name() {
    return this.name;
  }
  public set name(name: string) {
    this.name = name;
  }
  public get gender() {
    return this.gender;
  }
  public set gender(gender: string) {
    this.gender = gender;
  }
}
