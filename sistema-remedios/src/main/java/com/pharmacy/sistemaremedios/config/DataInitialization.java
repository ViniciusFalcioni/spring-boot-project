package com.pharmacy.sistemaremedios.config;

import com.pharmacy.sistemaremedios.model.Remedio;
import com.pharmacy.sistemaremedios.repository.RemedioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitialization implements CommandLineRunner {

    private final RemedioRepository remedioRepository;

    public DataInitialization(RemedioRepository remedioRepository) {
        this.remedioRepository = remedioRepository;
    }

    @Override
    public void run(String... args) {
        List<Remedio> remedios = new ArrayList<>();

        // Exemplo de inserção de remédios
        remedios.add(new Remedio(null, "Paracetamol", "Fabricante A", 5.99, 50,
                "https://www.drogarianovaesperanca.com.br/imagens/600x600/paracetamol-500mg-com-20-comprimidos-f54e7f1e07.jpg"));
        remedios.add(new Remedio(null, "Amoxicilina", "Fabricante B", 8.50, 30,
                "https://cdn-cosmos.bluesoft.com.br/products/7896004700427"));
        remedios.add(new Remedio(null, "Ibuprofeno", "Fabricante C", 7.25, 45,
                "https://www.drogariaminasbrasil.com.br/media/product/2c9/ibuprofeno-50mg-suspensao-gotas-30ml-generico-geolab-e60.jpg"));

        // Insira os remédios no banco de dados
        remedioRepository.saveAll(remedios);
    }
}