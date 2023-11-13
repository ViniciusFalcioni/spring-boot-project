package com.pharmacy.sistemaremedios.controller;

import com.pharmacy.sistemaremedios.model.Remedio;
import com.pharmacy.sistemaremedios.service.RemedioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/remedios")
public class RemedioController {

    private final RemedioService remedioService;

    @Autowired
    public RemedioController(RemedioService remedioService) {
        this.remedioService = remedioService;
    }

    @GetMapping
    public List<Remedio> getAllRemedios() {
        return remedioService.findAllRemedios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Remedio> getRemedioById(@PathVariable Long id) {
        Optional<Remedio> remedio = remedioService.findRemedioById(id);
        return remedio.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Remedio addRemedio(
            @RequestParam("fotoUrl") String fotoUrl,
            @RequestParam("nome") String nome,
            @RequestParam("fabricante") String fabricante,
            @RequestParam("preco") Double preco,
            @RequestParam("estoque") Integer estoque) {
        // Crie uma instância de Remedio com os valores recebidos
        Remedio remedio = new Remedio();
        remedio.setNome(nome);
        remedio.setFabricante(fabricante);
        remedio.setPreco(preco);
        remedio.setEstoque(estoque);
        remedio.setFotoUrl(fotoUrl);

        return remedioService.saveRemedio(remedio);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Remedio> updateRemedio(@PathVariable Long id, @RequestBody Remedio remedioDetails) {
        Optional<Remedio> existingRemedio = remedioService.findRemedioById(id);
        if (existingRemedio.isPresent()) {
            Remedio updatedRemedio = existingRemedio.get();
            updatedRemedio.setNome(remedioDetails.getNome());
            updatedRemedio.setFabricante(remedioDetails.getFabricante());
            updatedRemedio.setPreco(remedioDetails.getPreco());
            updatedRemedio.setEstoque(remedioDetails.getEstoque());
            remedioService.saveRemedio(updatedRemedio);
            return ResponseEntity.ok(updatedRemedio);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRemedio(@PathVariable Long id) {
        remedioService.deleteRemedio(id);
        return ResponseEntity.ok().build();
    }
}
