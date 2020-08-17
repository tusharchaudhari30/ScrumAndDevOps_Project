package com.tushar.zuul_server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OauthCheckToken {
    ArrayList<String> authorities = new ArrayList<String>();
    ArrayList<String> scope = new ArrayList<String>();
    private boolean active;
    private float exp;
    private String user_name;
    private String client_id;
}
