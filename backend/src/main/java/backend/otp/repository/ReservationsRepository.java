package backend.otp.repository;

<<<<<<< HEAD
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
=======
import org.springframework.data.jpa.repository.JpaRepository;
>>>>>>> e337bcd7368029f884354a4a952ff4ea21008e7b
import org.springframework.stereotype.Repository;

import backend.otp.entity.Reservations;

@Repository
public interface ReservationsRepository extends JpaRepository<Reservations, Long>{
<<<<<<< HEAD

    @Query("SELECT r.id FROM Reservations r WHERE r.user.id = :userId")
    List<Long> findAllIdByUser_Id(Long userId);
=======
    
>>>>>>> e337bcd7368029f884354a4a952ff4ea21008e7b
}
