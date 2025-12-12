package backend.otp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import backend.otp.entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long> {

    @Query("SELECT o.id FROM Orders o WHERE o.reservation.id = :reservationId AND o.status <> :status")
    Long findIdByReservationIdAndStatusNot(@Param("reservationId") Long reservationId,
            @Param("status") String status);

=======
import org.springframework.stereotype.Repository;

import backend.otp.entity.Orders;
@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long>{
    
>>>>>>> e337bcd7368029f884354a4a952ff4ea21008e7b
}
