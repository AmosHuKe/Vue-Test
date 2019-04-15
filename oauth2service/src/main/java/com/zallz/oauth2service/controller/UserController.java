package com.zallz.oauth2service.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zallz.oauth2service.entity.SysAccount;
import com.zallz.oauth2service.service.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;

@RestController
@Api(tags = "UserController | 用户控制器")
public class UserController {
	private static final Logger logger= LogManager.getLogger(UserController.class);
	@Autowired
	private UserService userService;

	/**
	 * 获取用户列表
	 * @param response
	 * @return
	 */
	@ApiOperation(value="获取用户列表", notes="获取用户列表")
	@ApiImplicitParams(
			{
				 @ApiImplicitParam(name = "access_token", value = "用户登录成功后获取的token", required = true, dataType = "String", paramType = "post")
			}
			)
	@ApiResponses({
//	    @ApiResponse(code=200,message="获取用户成功"),
//	    @ApiResponse(code=10000,message="获取用户异常")
	})
    @PostMapping(value = "users/list")
    public List<SysAccount> listUser(HttpServletResponse response){
    	List<SysAccount> accountList = null;
    	try {
    		accountList = userService.findlist();
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取用户列表异常" + e.getMessage());
		}
    	return accountList;
    }
    
    /**
     * 获取当前用户信息
     * @param response
     * @return
     */
	@ApiOperation(value="获取当前用户信息", notes="获取当前用户信息")
	@ApiImplicitParams(
			{
				 @ApiImplicitParam(name = "access_token", value = "用户登录成功后获取的token", required = true, dataType = "String", paramType = "post")
			}
			)
	@ApiResponses({
//	    @ApiResponse(code=200,message="获取用户成功"),
//	    @ApiResponse(code=10000,message="获取用户异常")
	})
    @PostMapping(value = "users/CurrentUser")
    public SysAccount CurrentUser(HttpServletResponse response){
    	SysAccount sysAccount = null;
    	try {
    		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    		sysAccount = userService.findByUserAccount(authentication.getName());
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取当前用户信息异常" + e.getMessage());
		}
    	return sysAccount;
    }
    
    /**
     * 根据用户名获取用户信息
     * @param response
     * @param username
     * @return
     */
	@ApiOperation(value="根据用户名获取用户信息", notes="根据用户名获取用户信息")
	@ApiImplicitParams(
			{
				 @ApiImplicitParam(name = "access_token", value = "用户登录成功后获取的token", required = true, dataType = "String", paramType = "post"),
				 @ApiImplicitParam(name = "username", value = "账号", required = true, dataType = "String", paramType = "post")
			}
			)
	@ApiResponses({
//	    @ApiResponse(code=200,message="获取用户成功"),
//	    @ApiResponse(code=10000,message="获取用户异常")
	})
    @PostMapping(value = "users/username")
    public SysAccount account(HttpServletResponse response,String username){
    	SysAccount sysAccount = null;
    	try {
    		sysAccount = userService.findByUserAccount(username);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("根据用户名获取用户信息异常" + e.getMessage());
		}
    	return sysAccount;
    }
    
    /**
     * 用户注册
     * @param response
     * @param userAccount
     * @param userPwd
     * @return
     */
	@ApiOperation(value="用户注册", notes="用户注册")
	@ApiImplicitParams(
			{
				 @ApiImplicitParam(name = "userAccount", value = "账号", required = true, dataType = "String", paramType = "post"),
				 @ApiImplicitParam(name = "userPwd", value = "密码", required = true, dataType = "String", paramType = "post")
			}
			)
	@ApiResponses({
//	    @ApiResponse(code=200,message="获取用户成功"),
//	    @ApiResponse(code=10000,message="获取用户异常")
	})
    @PostMapping(value = "register")
    public String register(HttpServletResponse response,String userAccount, String userPwd){
    	try {
    		SysAccount sysAccount = userService.findByUserAccount(userAccount);
    		String message = "";
    		if(sysAccount != null){
    			message = "账号已经存在，请重新注册！";
    		}else{
    			sysAccount = new SysAccount();
            	sysAccount.setUserAccount(userAccount);
            	sysAccount.setUserPwd(new BCryptPasswordEncoder().encode(userPwd));//密码bcrypt加密
            	userService.insert(sysAccount);
            	message = "注册成功";
    		}
        	return message;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("用户注册异常" + e.getMessage());
			return "注册异常";
		}
    }
    
    
}
