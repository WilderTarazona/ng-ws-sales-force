import {IUser} from './user.interface';
import {IToken} from './token.interface';
import {UserRolEnum} from '../constants/rol.enum';

export class UserModel implements IUser {
  userName: string;
  role: UserRolEnum;
  country: string;

  constructor(token: IToken) {
    this.userName = token.user_id || null;
    this.role = token.role as UserRolEnum || null;
    this.country = token.country || null;
  }
/*
  get isAdmin(): boolean {
    return this.rol === UserRol.ADMIN;
  }

  get isStudent(): boolean {
    return this.rol === UserRol.STUDENT;
  }

  isAuthorized(rols: UserRol[]) {
    return rols.includes(this.rol);
  }
*/
}

export class UserTest {
  public role: string;
  public phase: string;
  public roadBright: boolean;
  public others: boolean;
  public sale: boolean;

  constructor() {
    this.role = 'SE';
    this.phase = 'V';
    this.roadBright = false;
    this.others = false;
    this.isSale();
  }

  isSale() {
    this.sale = this.phase === 'V' ? true : false;
  }
}
