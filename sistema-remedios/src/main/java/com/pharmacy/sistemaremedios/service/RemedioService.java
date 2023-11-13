package com.pharmacy.sistemaremedios.service;

import com.pharmacy.sistemaremedios.model.Remedio;
import com.pharmacy.sistemaremedios.repository.RemedioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RemedioService {

    private final RemedioRepository remedioRepository;

    @Autowired
    public RemedioService(RemedioRepository remedioRepository) {
        this.remedioRepository = remedioRepository;
    }

    public List<Remedio> findAllRemedios() {
        return remedioRepository.findAll();
    }

    public Optional<Remedio> findRemedioById(Long id) {
        return remedioRepository.findById(id);
    }

    public Remedio saveRemedio(Remedio remedio) {
        return remedioRepository.save(remedio);
    }

    public void deleteRemedio(Long id) {
        remedioRepository.deleteById(id);
    }

}
