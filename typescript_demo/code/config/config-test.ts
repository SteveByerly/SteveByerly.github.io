class User {
  private username: string;
  private isLoggedIn = true;

  constructor(username: string) {
    this.username = username;
  }

  // This Is Private!!!
  private logout() {
    this.isLoggedIn = false;
    return `Goodbye, ${this.username}`;
  }
}

const user = new User("steve");
