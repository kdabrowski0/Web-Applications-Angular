package com.ug.angular.project.modules;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "cars")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Car {

    @Id
    private String carId;
    private String carCompanyName;
    private String carModel;
    private Number carYear;

    @CreatedDate
    private LocalDateTime createDate;

    private List<String> carColors;


}