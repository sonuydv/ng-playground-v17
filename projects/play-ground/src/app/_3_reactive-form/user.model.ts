
export interface UserModel{
  name: string;
  address:{city:string, state:string,country:string}|string;
  gender:'male' | 'female' | 'other'
}
