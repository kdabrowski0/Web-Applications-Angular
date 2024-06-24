package com.ug.angular.project.services;

import com.ug.angular.project.exception.ResourceNotFoundException;
import com.ug.angular.project.modules.Car;
import com.ug.angular.project.modules.Comment;
import com.ug.angular.project.respositories.CarRepository;
import com.ug.angular.project.respositories.CommentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final CarRepository carRepository;
    public List<Comment> getAllCommentsByCarId(String carId) {
        return commentRepository.findByCar_CarId(carId);
    }

    public void deleteComment(String commentId) {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);

        if (commentOptional.isPresent()) {
            Comment comment = commentOptional.get();

            if (comment.getCar() != null) {
                Car car = comment.getCar();
                carRepository.save(car);
            }
            commentRepository.deleteById(commentId);
        } else {
            throw new ResourceNotFoundException("Comment not found for id: " + commentId);
        }
    }

    public Comment addComment(String carId, Comment comment) {
        Optional<Car> carOptional = carRepository.findById(carId);

        if (carOptional.isPresent()) {
            Car car = carOptional.get();

            comment.setCar(car);
            Comment savedComment = commentRepository.save(comment);
            carRepository.save(car);

            return savedComment;

        } else {
            throw new ResourceNotFoundException("Car not found for id: " + carId);
        }
    }
}