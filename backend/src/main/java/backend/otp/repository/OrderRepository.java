package backend.otp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import backend.otp.entity.Order;
import io.lettuce.core.dynamic.annotation.Param;

public interface OrderRepository extends JpaRepository<Order, Long> {

    boolean existsByReservationsId(Long reservationsId);

    @Query("""
    SELECT o.status
    FROM Order o
    WHERE o.reservationsId = :reservationId
    """)
    String findStatusByReservationsId(@Param("reservationId") Long reservationId);

    // 讓 Service 可以把舊訂單抓出來檢查狀態
    Optional<Order> findByReservationsId(Long reservationsId);
}
