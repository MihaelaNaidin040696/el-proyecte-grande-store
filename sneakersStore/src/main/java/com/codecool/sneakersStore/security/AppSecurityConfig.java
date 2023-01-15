package com.codecool.sneakersStore.security;

import com.codecool.sneakersStore.service.ClientService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {

    private final ClientService clientService
            ;
    private final JWTTokenHelper jWTTokenHelper;
    private final AuthenticationEntryPoint authenticationEntryPoint;

    public AppSecurityConfig(ClientService clientService, JWTTokenHelper jWTTokenHelper, AuthenticationEntryPoint authenticationEntryPoint) {
        this.clientService = clientService;
        this.jWTTokenHelper = jWTTokenHelper;
        this.authenticationEntryPoint = authenticationEntryPoint;
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
//                .authenticationEntryPoint(authenticationEntryPoint).and()
//                .authorizeRequests((request) -> request.antMatchers(
//                        "/",
//                        "/prod/products",
//                        "/client/register",
//                        "/client/login").permitAll())
//                .authorizeRequests((request) -> request.antMatchers(
//                                "/prod/products",
//                        "/prod/products/1",
//                        "/cart/get-cart",
//                        "/cart/add-to-cart/**",
//                        "/cart/update-cart-item-quantity",
//                        "/cart/delete-cart-item/**",
//                        "/cart-item",
//                        "/cart-item/increase-cart-value/**",
//                        "/cart-item/decrease-cart-value/**",
//                        "/cart-item/delete-cart-item/**",
//                        "/cart-item/get-cart-item/**"
//                        ).hasRole("USER")
//                        .anyRequest().authenticated())
//                .addFilterBefore(new JWTAuthenticationFilter(clientService, jWTTokenHelper),
//                        UsernamePasswordAuthenticationFilter.class);
//        http.csrf().disable().cors().and().headers().frameOptions().disable();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
