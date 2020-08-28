package com.tushar.zuul_server.controller;

import com.tushar.zuul_server.model.OauthCheckToken;
import com.tushar.zuul_server.model.OauthToken;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class UserController {

    final RestTemplate OauthClient;

    public UserController(RestTemplate OauthClient) {
        this.OauthClient = OauthClient;
    }

    @GetMapping(value = {"/project/**"})
    public String project() {
        return "project";
    }

    @PostMapping(value = "/login")
    @ResponseBody
    public Boolean login(String username, String password, HttpServletRequest request, HttpServletResponse responses) {
        if (username != null && password != null) {
            try {
                ResponseEntity<OauthToken> res = OauthClient
                        .postForEntity("http://AUTH-SERVER/oauth/token?grant_type=password&username=" + username
                                + "&password=" + password, new OauthToken(), OauthToken.class);
                Cookie cookie = new Cookie("Authentication", res.getBody().getAccess_token());
                cookie.setHttpOnly(true);
                responses.addCookie(cookie);
                return true;
            } catch (HttpClientErrorException httpClientErrorException) {
                return false;
            }
        } else {
            return false;
        }
    }

    @GetMapping("/login/check")
    @ResponseBody
    public Boolean check_login(HttpServletRequest request) {
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equalsIgnoreCase("Authentication")) {
                    try {
                        var token = cookie.getValue();
                        ResponseEntity<OauthCheckToken> res = OauthClient.postForEntity(
                                "http://AUTH-SERVER/oauth/check_token?token=" + token, new OauthCheckToken(),
                                OauthCheckToken.class);
                        return true;
                    } catch (HttpClientErrorException httpClientErrorException) {
                        return false;
                    }

                }
            }
        }
        return false;
    }

}