package library.main.Repository;

import library.main.Entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository <Usuarios, Long> {
}
