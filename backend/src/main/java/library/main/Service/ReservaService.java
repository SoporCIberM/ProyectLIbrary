package library.main.Service;

import library.main.Entity.Libro;
import library.main.Entity.Reserva;
import library.main.Entity.Usuarios;
import library.main.Repository.LibroRepository;
import library.main.Repository.ReservaRepository;
import library.main.Repository.UsuariosRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private final ReservaRepository reservaRepository;
    private final UsuariosRepository usuariosRepository;
    private final LibroRepository libroRepository;

    public ReservaService(ReservaRepository reservaRepository,
                          UsuariosRepository usuariosRepository,
                          LibroRepository libroRepository) {
        this.reservaRepository = reservaRepository;
        this.usuariosRepository = usuariosRepository;
        this.libroRepository = libroRepository;
    }

    //-------------------------------------------------------------------------------
    // Crear reserva
    public Reserva crearReserva(Long idUsuario, Long idLibro) {
        Usuarios usuario = usuariosRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Libro libro = libroRepository.findById(idLibro)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado"));

        Reserva reserva = new Reserva();
        reserva.setUsuario(usuario);
        reserva.setLibro(libro);
        reserva.setFechaReserva(LocalDate.now());
        reserva.setEstado(Reserva.Estado.PENDIENTE);

        return reservaRepository.save(reserva);
    }

    //-------------------------------------------------------------------------------
    // Listar todas las reservas
    public List<Reserva> listarReservas() {
        return reservaRepository.findAll();
    }

    //-------------------------------------------------------------------------------
    // Buscar reserva por ID
    public Optional<Reserva> buscarPorId(Long idReserva) {
        return reservaRepository.findById(idReserva);
    }

    //-------------------------------------------------------------------------------
    // Eliminar reserva
    public void eliminarReserva(Long idReserva) {
        reservaRepository.deleteById(idReserva);
    }
}