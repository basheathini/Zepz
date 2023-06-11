export interface RequestModel {
  has_more: boolean;
  items: User[];
}

export interface User {
  account_id: number;
  display_name: string;
  profile_image: string;
  reputation: number;
  user_id: number;
}
