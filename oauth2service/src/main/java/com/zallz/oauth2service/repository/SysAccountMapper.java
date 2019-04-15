package com.zallz.oauth2service.repository;

import java.util.List;

import com.zallz.oauth2service.entity.SysAccount;

public interface SysAccountMapper {

	SysAccount findByUserAccount(String username);
	List<SysAccount> findlist();
	int insert(SysAccount sysAccount);

}
