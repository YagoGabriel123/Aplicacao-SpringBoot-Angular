package br.com.tvin_solar.api_cadastro_inversor.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.tvin_solar.api_cadastro_inversor.modelo.Inversor;

@Repository
public interface Repositorio extends CrudRepository<Inversor,Long>  {
    
}
