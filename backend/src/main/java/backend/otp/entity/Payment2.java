package backend.otp.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "payments")
public class Payment2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Orders orders;

    @Column(name = "payment_method", nullable = true)
    private String paymentMethod;

    @Column(name = "amount", nullable = true)
    private BigDecimal amount;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at", insertable = false, updatable = false, nullable = true)
    private LocalDateTime createdAt;
    
}
