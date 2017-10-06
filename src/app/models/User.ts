export class User {

  constructor(username: string, fullname: string, email: string, permissions){
    this.username = username;
    this.fullname = fullname;
    this.email = email;
    this.permissions= permissions;
  }

    username: string;
    fullname: string;
    email: string;
    permissions: {
        admin: boolean,
        modules: [
            {
                moduleCode: string,
                permission: number
            }
        ]
    }
}
