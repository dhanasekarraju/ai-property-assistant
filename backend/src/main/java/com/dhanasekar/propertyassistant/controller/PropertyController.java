package com.dhanasekar.propertyassistant.controller;

import com.dhanasekar.propertyassistant.model.Property;
import com.dhanasekar.propertyassistant.service.MockPropertyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin("*")
public class PropertyController {

    private final MockPropertyService service;

    public PropertyController(MockPropertyService service) {
        this.service = service;
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return service.getAll();
    }

    @GetMapping("/{unitNo}")
    public Property getByUnit(@PathVariable String unitNo) {
        return service.getByUnitNo(unitNo);
    }
}
