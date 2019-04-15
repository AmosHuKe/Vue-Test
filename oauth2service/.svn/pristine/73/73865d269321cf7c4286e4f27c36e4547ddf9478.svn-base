package com.zallz.oauth2service.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.zallz.oauth2service.entity.SysAccount;

public interface UserService extends UserDetailsService{
	SysAccount findByUserAccount(String username);
	List<SysAccount> findlist();
	int insert(SysAccount sysAccount);
}
