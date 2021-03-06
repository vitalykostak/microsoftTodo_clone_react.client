class AuthHelper {
  validateFirstName(value) {
    if (value.length === 0) {
      return 'Введите имя';
    }

    if (value.length < 2 || value.length > 15) {
      return 'Имя: 2-15 символов';
    }

    return null;
  }

  validateSurname(value) {
    if (value.length === 0) {
      return 'Введите фамилию';
    }

    if (value.length < 2 || value.length > 15) {
      return 'Фамилия: 2-15 символов';
    }

    return null;
  }

  validateUsername(value) {
    if (value.length === 0) {
      return 'Введите имя пользователя';
    }
    if (value.length < 4 || value.length > 15) {
      return 'Имя пользователя: 4-15 символов';
    }
    return null;
  }

  validatePassword(value) {
    if (value.length === 0) {
      return 'Введите пароль';
    }
    if (value.length < 6 || value.length > 15) {
      return 'Пароль: 6-15 символов';
    }
    return null;
  }

  checkAuth() {
    const token = localStorage.getItem('token');

    return !!token ? true : false;
  }

  setAuthDataToLS(AuthData) {
    for (let key in AuthData) {
      localStorage.setItem(key, AuthData[key]);
    }
  }

  getToken() {
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    return token;
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}

export default new AuthHelper();
