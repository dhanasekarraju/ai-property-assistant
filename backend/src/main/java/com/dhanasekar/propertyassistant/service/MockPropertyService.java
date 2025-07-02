package com.dhanasekar.propertyassistant.service;

import com.dhanasekar.propertyassistant.model.Property;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MockPropertyService {

    private final List<Property> properties = new ArrayList<>();

    public MockPropertyService() {
        properties.add(new Property("A101", "Dream Heights", "Skyline Developers", 2500000, "FLAT", "AVAILABLE"));
        properties.add(new Property("P-22", "Green Valley", "EcoBuilders", 1800000, "PLOT", "BOOKED"));
        properties.add(new Property("B505", "Elite Residency", "UrbanNest", 3200000, "FLAT", "AVAILABLE"));
    }

    public List<Property> getAll() {
        return properties;
    }

    public Property getByUnitNo(String unitNo) {
        return properties.stream()
                .filter(p -> p.getUnitNo().equalsIgnoreCase(unitNo))
                .findFirst()
                .orElse(null);
    }
}
