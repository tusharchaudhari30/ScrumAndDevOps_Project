package com.tushar.project_management.config;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.exceptions.InvalidTokenException;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.AccessTokenConverter;
import org.springframework.security.oauth2.provider.token.DefaultAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

    public class CustomTokenService implements ResourceServerTokenServices {

    @Autowired
    private RestTemplate restTemplate;

    private AccessTokenConverter tokenConverter = new DefaultAccessTokenConverter();


    @Override
    public OAuth2Authentication loadAuthentication(String accessToken) throws AuthenticationException, InvalidTokenException {
        String username = "project_management";
        String password = "project_management";
        String credentials = username + ":" + password;
        byte[] credentialBytes = credentials.getBytes();
        byte[] base64CredentialBytes = Base64.encodeBase64(credentialBytes);
        String base64Credentials = new String(base64CredentialBytes);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Basic " + base64Credentials);
        Map<String, Object> map = executeGet("http://AUTH-SERVER/oauth/check_token?token=" + accessToken, headers);
        if (map == null || map.isEmpty() || map.get("error") != null) {
            throw new InvalidTokenException("Token not allowed");
        }
        return tokenConverter.extractAuthentication(map);
    }

    @Override
    public OAuth2AccessToken readAccessToken(String accessToken) {
        throw new UnsupportedOperationException("Not supported: read access token");
    }

    private Map<String, Object> executeGet(String path, HttpHeaders headers) {
        try {
            if (headers.getContentType() == null) {
                headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            }
            @SuppressWarnings("rawtypes")
            Map map = restTemplate.exchange(path, HttpMethod.GET, new HttpEntity<MultiValueMap<String, String>>(null, headers), Map.class).getBody();
            @SuppressWarnings("unchecked")
            Map<String, Object> result = map;
            return result;
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        return null;
    }

}