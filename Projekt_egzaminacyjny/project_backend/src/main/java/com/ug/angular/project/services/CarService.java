package com.ug.angular.project.services;

import com.ug.angular.project.exception.ResourceNotFoundException;
import com.ug.angular.project.modules.Car;
import com.ug.angular.project.modules.Comment;
import com.ug.angular.project.respositories.CarRepository;
import com.ug.angular.project.respositories.CommentRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CarService {
    private final CarRepository carRepository;
    private final CommentRepository commentRepository;


    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(String carId) {
        Optional<Car> car = carRepository.findById(carId);

        if (car.isPresent()) {
            return car.get();
        } else {
            throw new ResourceNotFoundException("Car not found for id: " + carId);
        }
    }

    public Car saveCar(Car car) {
        if (car.getCarId() == null) {
            car.setCreateDate(LocalDateTime.now());
        }

        car.setCarCompanyName(capitalizeFirstLetter(car.getCarCompanyName()));
        car.setCarModel(capitalizeFirstLetter(car.getCarModel()));
        car.setCarColors(capitalizeColors(car.getCarColors()));

        return carRepository.save(car);
    }

    public void deleteCar(String carId) {
        Optional<Car> carOptional = carRepository.findById(carId);

        if (carOptional.isPresent()) {

            List<Comment> comments = commentRepository.findByCar_CarId(carId);
            commentRepository.deleteAll(comments);
            carRepository.deleteById(carId);
        } else {
            throw new ResourceNotFoundException("Car not found for id: " + carId);
        }
    }

    private String capitalizeFirstLetter(String input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
    }

    private List<String> capitalizeColors(List<String> colors) {
        for (int i = 0; i < colors.size(); i++) {
            colors.set(i, capitalizeFirstLetter(colors.get(i)));
        }
        return colors;
    }
}
