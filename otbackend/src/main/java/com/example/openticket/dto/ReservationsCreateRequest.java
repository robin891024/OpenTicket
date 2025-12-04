package com.example.openticket.dto;

import java.util.List;

import lombok.Data;

@Data
public class ReservationsCreateRequest {
    private Long userId;
    private Long eventId;
    // private Long eventTicketTypeId;
    // private Integer quantity;
    private List<ReservationItemsCreateRequest> items;

}
