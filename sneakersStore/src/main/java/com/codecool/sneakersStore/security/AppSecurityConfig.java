package com.codecool.sneakersStore.security;

import com.codecool.sneakersStore.service.ClientService;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;

@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {

    private final ClientService clientService;
    private final JWTTokenHelper jWTTokenHelper;
    private final AuthenticationEntryPoint authenticationEntryPoint;

    public AppSecurityConfig(ClientService clientService, JWTTokenHelper jWTTokenHelper, AuthenticationEntryPoint authenticationEntryPoint) {
        this.clientService = clientService;
        this.jWTTokenHelper = jWTTokenHelper;
        this.authenticationEntryPoint = authenticationEntryPoint;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint).and()
                .authorizeRequests((request) -> request.antMatchers(
                        "/",
                        "/api/*/count",
                        "/api/campaigns",
                        "/api/campaigns/campaign/*",
                        "/api/campaigns/get-user-by-campaign/*",
                        "/api/opinions/get-user-by-opinion/*",
                        "/api/users/register",
                        "/api/users/login",
                        "/api/users/user/*",
                        "/api/opinions/*",
                        "/api/payment/create-payment-intent",
                        "/api/payment/add-payment/*/*/*",
                        "/api/payment/get-user-by-payment/*").permitAll()

                )
                .authorizeRequests((request) -> request.antMatchers(
                                "/api/campaigns/add-campaign/*",
                                "/api/opinions/add-opinion/*",
                                "/api/campaigns/delete-campaign/*",
                                "/api/opinions/delete-opinion/*"
                        ).hasRole("USER")
                        .anyRequest().authenticated())
                .addFilterBefore(new JWTAuthenticationFilter(clientService, jWTTokenHelper),
                        UsernamePasswordAuthenticationFilter.class);
        http.csrf().disable().cors().and().headers().frameOptions().disable();


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
