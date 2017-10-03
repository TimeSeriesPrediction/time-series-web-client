export class User {

  constructor(username: string, email: string,modules: string[]){
    this.username = username;
    this.email = email;
    this.modules= modules;
  }

  username: string;
  email: string;
  modules: string [];//stores all the modules that this user has access to
}
