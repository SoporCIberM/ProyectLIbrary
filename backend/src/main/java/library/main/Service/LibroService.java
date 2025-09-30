package library.main.Service;

import library.main.Entity.Libro;
import library.main.Repository.LibroRepository;

import java.util.List;
import java.util.Optional;

public class LibroService {
    private final LibroRepository lb;

    public LibroService(LibroRepository lb) {
        this.lb = lb;
    }

    public Libro RegistrarLibro(Libro libro){
        return lb.save(libro);
    }
   public List<Libro> listarlibros(){
        return lb.findAll();
   }
   public Optional<Libro> buscaridlibro(Long id){
        return lb.findById(id);
   }
   public void eliminarlibro(Long id){
        lb.deleteById(id);
   }

   public Libro actualizarlibros (Long id, Libro actualizarlibros){
        return lb.findById(id).map(libro -> {
            libro.setGenero(actualizarlibros.getGenero());
            libro.setAutor(actualizarlibros.getAutor());
            libro.setAnioPublicacion(actualizarlibros.getAnioPublicacion());
            libro.setTitulo(actualizarlibros.getTitulo());
            libro.setEditorial(actualizarlibros.getEditorial());
            libro.setStock(actualizarlibros.getStock());
            return lb.save(libro);
                }).orElseThrow(() -> new RuntimeException("Libro no encontrado"));
   }

}
