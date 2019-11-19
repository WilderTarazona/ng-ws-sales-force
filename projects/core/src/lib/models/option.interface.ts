export interface IOption {
  description: string;
  creation_date: string;
  update_date: string;
  option_type: string;
  role: string;
  active: string;
  sub_option: ISubOption[];
}

export interface ISubOption {
  description: string;
  application: string;
  role: string;
  url: string;
}
