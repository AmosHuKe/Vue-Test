package com.zallz.oauth2service.config.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
/**
 * 认证失败自定义处理
 * @author lyt
 *
 */
@Slf4j
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        log.info("      ========================================= 身份认证失败..................... ");
        httpServletResponse.setContentType("text/html;charset=UTF-8");
        httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED,"身份认证失败");
    }
}
