package com.codecool.sneakersStore.security.configuration;
import com.codecool.sneakersStore.security.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .exceptionHandling()
                .and()
                .authorizeHttpRequests((request) -> request.antMatchers(
                        "/prod/products",
                        "/auth/**").permitAll()
                )
                .authorizeHttpRequests((request) -> request.antMatchers(
                                "/prod/product/**",
                                "/client/**",
                                "/cart/**",
                                "/cart/get-cart/**",
                                "/cart-item/**",
                                "/order/**")
                        .hasRole(String.valueOf(Role.USER))
                        .anyRequest()
                        .authenticated()
                )
//                .authorizeHttpRequests((request) -> request.antMatchers(
//                        "/admin/**")
//                        .hasRole(String.valueOf(Role.ADMIN))
//                        .anyRequest()
//                        .authenticated()
//                )
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        http.csrf().disable().cors().and().headers().frameOptions().disable();

        return http.build();
    }
}