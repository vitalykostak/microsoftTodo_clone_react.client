import api from '../api';

class UserService {
  async getUserInfo() {
    return api('/user/me', 'GET').then(response => {
      console.log(response);
    });
  }
}

export default new UserService();
