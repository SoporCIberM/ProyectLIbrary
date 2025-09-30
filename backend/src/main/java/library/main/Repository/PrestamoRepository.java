package library.main.Repository;

import library.main.Entity.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrestamoRepository extends JpaRepository <Prestamo , Long> {
}
