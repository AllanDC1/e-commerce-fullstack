package com.allandc.ecommerce.config;

import com.allandc.ecommerce.entity.Product;
import com.allandc.ecommerce.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] unsupportedActions = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};

        // Disable HTTP methods for Product
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(
                        (metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure(
                        (metdata, httpMethods) -> httpMethods.disable(unsupportedActions));

        // Disable HTTP methods for ProductCategory
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(
                        (metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure(
                        (metdata, httpMethods) -> httpMethods.disable(unsupportedActions));
    }
}
