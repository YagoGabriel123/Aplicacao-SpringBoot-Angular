package br.com.tvin_solar.api_cadastro_inversor.modelo;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "inversores")
@Getter
@Setter
public class Inversor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private long codigo;

    private long codigo_inversor;

    private String ns_inversor;

    private String ns_datalogger;
    
    private String nf;

    private String cnpj;

    private String marca;

    private String data;

    private String observacoes;


    

}
