package com.example.openticket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.openticket.dto.ReservationResponse;
import com.example.openticket.dto.ReservationsCreateRequest;
import com.example.openticket.service.ReservationsService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationsService reservationsService;

    /**
     * 處理創建預定單的 POST 請求
     * 請求路徑: POST /api/reservations/item
     * 接收: ReservationsCreateRequest (JSON 格式)
     * 回應: ReservationResponse (JSON 格式)
     */ 
    @PostMapping("/items")
    public ResponseEntity<ReservationResponse> createReservation(@RequestBody @Valid ReservationsCreateRequest request){
        ReservationResponse response = reservationsService.createReservation(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}