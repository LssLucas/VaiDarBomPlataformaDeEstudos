package com.vaiDarBom.vaiDarBomPlataformaDeEstudos.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;



@EnableSwagger2
@Configuration
public class SwaggerConfig {    
	@Bean
	public Docket docket(){
			
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis( RequestHandlerSelectors.basePackage
						("com.vaiDarBom.vaiDarBomPlataformaDeEstudos.controller") )
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo());
		}
	private ApiInfo apiInfo(){
		return new ApiInfoBuilder()
				.title("Blog Pessoal")
				.description("API do Projeto de blog pessoal")
				.version("1.0")
				.contact(contact())
				.build();    
		}    
	private Contact contact(){
		return new Contact("Antonia Martins, Gabriela França, Jefferson Russo, Lucas Silveira, Matheus Jesus",
				"https://github.com/antonia-stephanie, https://github.com/gaabiizynha, https://github.com/JeffersonRusso, https://github.com/LssLucas, https://github.com/mjfo1910",
				"Grupo Projeto Integrador - Full Stack Java/Angular");
		}
	}