export class User {

  constructor(username?: string, fullname?: string, email?: string, permissions?: any){
    this.username = username;
    this.fullname = fullname;
    this.email = email;
    this.permissions= permissions || {
      admin: false,
      modules: []
    };
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
