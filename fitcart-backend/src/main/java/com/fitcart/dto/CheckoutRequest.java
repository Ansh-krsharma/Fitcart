package com.fitcart.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CheckoutRequest {
    @NotBlank(message = "Address is required")
    private String address;
}
