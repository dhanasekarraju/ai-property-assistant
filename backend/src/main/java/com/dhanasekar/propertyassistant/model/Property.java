package com.dhanasekar.propertyassistant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Property {
    private String unitNo;
    private String projectName;
    private String developerName;
    private double price;
    private String type;
    private String status;
}
