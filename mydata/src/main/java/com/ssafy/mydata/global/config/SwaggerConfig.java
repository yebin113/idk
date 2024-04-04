package com.ssafy.mydata.global.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(title = "MyData API 명세서",
                version = "v1"))
@Configuration
public class SwaggerConfig {
}
