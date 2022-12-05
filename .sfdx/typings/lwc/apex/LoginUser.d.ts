declare module "@salesforce/apex/LoginUser.login" {
  export default function login(param: {username: any, password: any}): Promise<any>;
}
