/*export interface IDetail {
  accessToken: string;
  refreshToken: string;
  name: string;
  role: string;
  country: string;
}*/

export interface IToken {
  /*title: string;
  type: number;
  detail: IDetail;*/
  user_id: string;
  role: string;
  country: string;
}
