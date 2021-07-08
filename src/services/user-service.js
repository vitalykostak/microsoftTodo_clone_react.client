import api from '../api';
import { setUserInfo } from '../store/actionCreators/user';

class UserService {
  async getUserInfo(dispatch) {
    return api('/user/me', 'GET').then(response => {
      const { statusCode, json } = response;
      if (statusCode === 200) {
        dispatch(setUserInfo(json));
      }
    });
  }
}

export default new UserService();
