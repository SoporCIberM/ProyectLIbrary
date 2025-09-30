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

    //-------------------------------------------------------------------------------

    // Crear nuevo usuario
    public Usuarios RegistroUsuario(Usuarios usuarios){
        return ur.save(usuarios);
    }

    //-------------------------------------------------------------------------------

    //  Listar todos los usuarios
    public List<Usuarios> listarUsuarios() {
        return ur.findAll();
    }

    //-------------------------------------------------------------------------------

    //  Buscar usuario por ID
    public Optional<Usuarios> buscarPorId(Long id) {
        return ur.findById(id);
    }

    //-------------------------------------------------------------------------------

    //  Actualizar usuario
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

    //-------------------------------------------------------------------------------

    //  Eliminar usuario
    public void eliminarUsuario(Long id) {
        ur.deleteById(id);
    }
}

