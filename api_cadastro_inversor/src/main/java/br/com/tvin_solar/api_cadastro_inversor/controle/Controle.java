package br.com.tvin_solar.api_cadastro_inversor.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.tvin_solar.api_cadastro_inversor.modelo.Inversor;
import br.com.tvin_solar.api_cadastro_inversor.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "*")
public class Controle {
        @Autowired
        private Repositorio acao;

        @PostMapping("/")
        public Inversor cadastrar(@RequestBody Inversor i){
            return acao.save(i);
 }

    @GetMapping("/")
    public Iterable<Inversor> selecionar(){

        return acao.findAll();
    }
    @PutMapping("/")
    public Inversor editar(@RequestBody Inversor i){
        return acao.save(i);

    }
    @DeleteMapping("/{codigo}")
    public void remover(@PathVariable long codigo){
        acao.deleteById(codigo);
    }
}
