package com.fitcart.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdminUserResponse {
    private Long id;
    private String name;
    private String email;
    private String role;
}
