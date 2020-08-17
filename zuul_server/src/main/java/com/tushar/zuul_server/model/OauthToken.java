package com.tushar.zuul_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OauthToken {
    String access_token;
    String token_type;
    Integer expires_in;
    String scope;

}
