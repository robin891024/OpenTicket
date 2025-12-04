package com.example.openticket.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservations")
public class Reservations {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    // private OrderId orderId;//還未建立在本地資料庫
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private Member user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "event_ticket_type_id", nullable = false)
    // private EventTicketType eventTicketType;

    // @Column(name = "quantity")
    // @NotNull(message = "數量不能為空")
    // private int quantity;

    @Column(name = "status")
    private String status;

    @Column(name = "expires_at")
    private LocalDateTime expiresAt;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // @Column(name = "total_ticket_price")
    // private BigDecimal totalTicketPrice;//單一票種的總價

    @Column(name = "totalAmount")
    private BigDecimal totalAmount;//所有票種的價格

    // --- 關聯 ReservationItems (預訂單明細) ---
    @OneToMany(mappedBy = "reservation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReservationItems> items = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Member getUser() {
        return user;
    }

    public void setUser(Member user) {
        this.user = user;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    // public int getQuantity() {
    //     return quantity;
    // }

    // public void setQuantity(int quantity) {
    //     this.quantity = quantity;
    // }

    // public EventTicketType getEventTicketType() {
    //     return eventTicketType;
    // }

    // public void setEventTicketType(EventTicketType eventTicketType) {
    //     this.eventTicketType = eventTicketType;
    // }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(LocalDateTime expiresAt) {
        this.expiresAt = expiresAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    // public BigDecimal getTotalTicketPrice() {
    //     return totalTicketPrice;
    // }

    // public void setTotalTicketPrice(BigDecimal totalTicketPrice) {
    //     this.totalTicketPrice = totalTicketPrice;
    // }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<ReservationItems> getItems() {
        return items;
    }

    public void setItems(List<ReservationItems> items) {
        this.items = items;
    }

    public void addItem(ReservationItems item) {
        this.items.add(item);
        // 確保 ReservationItems.java 中有 setReservation() 方法
        item.setReservation(this); 
    }
    

}
