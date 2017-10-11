export class AddUserModel {

  constructor(username?: string, fullname?: string, email?: string, password?: string){
    this.username = username;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  username: String;
  password: String;
  email: String;
  fullname : String;
}
