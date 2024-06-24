package com.ug.angular.project.respositories;

import com.ug.angular.project.modules.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findByCar_CarId(String carId);
}
