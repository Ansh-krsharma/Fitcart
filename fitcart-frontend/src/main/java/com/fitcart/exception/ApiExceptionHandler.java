package com.fitcart.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.put(error.getField(), error.getDefaultMessage());
        }
        if (!errors.containsKey("message")) {
            errors.put("message", "Validation failed");
        }
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Map<String, String>> handleBadCredentials(BadCredentialsException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid email or password"));
    }

    @ExceptionHandler({RuntimeException.class, NoSuchElementException.class})
    public ResponseEntity<Map<String, String>> handleRuntime(Exception ex) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        String msg = ex.getMessage() == null ? "Request failed" : ex.getMessage();
        if (msg.toLowerCase().contains("not found")) {
            status = HttpStatus.NOT_FOUND;
        }
        return ResponseEntity.status(status).body(Map.of("message", msg));
    }
}
