package com.application.xiaomi.Controller.User;

import com.application.xiaomi.entities.Users;

import java.util.List;

public interface UsersInterface {
    public Users saveObj(Users obj);
    public List<Users> getAll();
}
