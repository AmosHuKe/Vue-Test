package com.zallz.oauth2service.service.impl;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.zallz.oauth2service.entity.SysAccount;
import com.zallz.oauth2service.repository.SysAccountMapper;
import com.zallz.oauth2service.service.UserService;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private SysAccountMapper sysAccountMapper;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		SysAccount user = sysAccountMapper.findByUserAccount(username);
        if(user == null){
            throw new UsernameNotFoundException("用户["+username+"]不存在");
        }
        return new User(user.getUserAccount(), user.getUserPwd(), getAuthority());
	}
	
	private List getAuthority() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_*"));
    }

	@Override
	public List<SysAccount> findlist() {
		return sysAccountMapper.findlist();
	}

	@Override
	public int insert(SysAccount sysAccount) {
		return sysAccountMapper.insert(sysAccount);
	}

	@Override
	public SysAccount findByUserAccount(String username) {
		return sysAccountMapper.findByUserAccount(username);
	}


}
