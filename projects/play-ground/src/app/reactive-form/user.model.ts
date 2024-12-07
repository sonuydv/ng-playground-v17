
export interface UserModel{
  name: string;
  address:{city:string, state:string,country:string};
  gender:'male' | 'female' | 'other'
}
