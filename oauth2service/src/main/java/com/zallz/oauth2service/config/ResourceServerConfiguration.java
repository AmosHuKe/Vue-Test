package com.zallz.oauth2service.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import com.zallz.oauth2service.config.handler.CustomAuthenticationEntryPoint;
import com.zallz.oauth2service.config.handler.CustomLogoutSuccessHandler;

/**
 * 资源服务认证配置
 * @author lyt
 *
 */
@Configuration
@EnableResourceServer  
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    private static final String RESOURCE_ID = "*";
    @Autowired
    private ResourceServerTokenServices tokenServices;

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId(RESOURCE_ID).stateless(true).tokenServices(tokenServices);
    }


    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS).permitAll()//允许跨域访问资源
                .antMatchers("/register").permitAll()//允许用户注册
                .antMatchers("/users/**").authenticated() //配置users访问控制，必须认证过后才可以访问
                .and()
                .exceptionHandling().authenticationEntryPoint(customAuthenticationEntryPoint())  //认证失败的业务处理
                .and()
                .logout()
                .logoutUrl("/oauth/logout")
                .logoutSuccessHandler(customLogoutSuccessHandler());   //退出成功的业务处理
    }
    


    @Bean
    public LogoutSuccessHandler customLogoutSuccessHandler(){
        return new CustomLogoutSuccessHandler();
    }

    @Bean
    public AuthenticationEntryPoint customAuthenticationEntryPoint(){
        return new CustomAuthenticationEntryPoint();
    }

}
