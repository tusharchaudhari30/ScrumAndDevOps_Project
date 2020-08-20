package com.tushar.project_management.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping(value = {"/", "/board", "/gannt"})
    public String index() {
        return "index";
    }
}