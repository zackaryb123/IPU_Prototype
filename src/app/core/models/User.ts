export class User {
  public uid;
  public username;
  public fname;
  public lname;
  public email;

  constructor(uid?, username?, fname?, lname?, email?) {
    this.uid = uid;
    this.username = username;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
  }
}
