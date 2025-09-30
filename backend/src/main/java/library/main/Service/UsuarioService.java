package library.main.Service;

import library.main.Entity.Usuarios;
import library.main.Repository.UsuariosRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuariosRepository ur;


    public UsuarioService(UsuariosRepository ur) {
        this.ur = ur;
    }

    public Usuarios RegistroUsuario(Usuarios usuarios){
        return ur.save(usuarios);
    }
    public List<Usuarios> listarUsuarios() {
        return ur.findAll();
    }
    public Optional<Usuarios> buscarPorId(Long id) {
        return ur.findById(id);
    }

    public Usuarios actualizarUsuario(Long id, Usuarios usuarioActualizado) {
        return ur.findById(id).map(usuario -> {
            usuario.setNombre(usuarioActualizado.getNombre());
            usuario.setApellido(usuarioActualizado.getApellido());
            usuario.setEmail(usuarioActualizado.getEmail());
            usuario.setTelefono(usuarioActualizado.getTelefono());
            usuario.setDireccion(usuarioActualizado.getDireccion());
            usuario.setRol(usuarioActualizado.getRol());
            return ur.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}

