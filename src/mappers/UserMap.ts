import User from '../models/User';

export default class UserMap {
  public static toDTO(user: User): any {
    return {
      id: user.id,
      password: user.password,
      avatar: user.avatar,
    };
  }
}
