package com.zallz.oauth2service.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.annotations.Api;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


/**
 * 在线API文档生成器配置
 * @author Administrator
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig{


	
	@Bean
	public Docket createRestApi() {
	        return new Docket(DocumentationType.SWAGGER_2)
	        	.apiInfo(apiInfo())
	            .select()
	            .apis(RequestHandlerSelectors.withClassAnnotation(Api.class))//扫描@Api注解的接口类
	            .paths(PathSelectors.any())
	            .build();
	}


	private ApiInfo apiInfo() {
	    return new ApiInfoBuilder()
	        .title("知上知oauth2 RESTful API")
	        .description("知上知oauth2授权服务器接口文档")
	        .termsOfServiceUrl("http://127.0.0.1:8080/oauth2service/swagger-ui.html")
	        .version("1.0")
	        .build();
	    }


}
