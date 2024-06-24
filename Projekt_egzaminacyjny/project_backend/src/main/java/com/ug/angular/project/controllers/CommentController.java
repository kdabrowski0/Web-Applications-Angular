package com.ug.angular.project.controllers;

import com.ug.angular.project.dtos.CommentDto;
import com.ug.angular.project.modules.Comment;
import com.ug.angular.project.services.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    @GetMapping("/car/{carId}")
    public List<CommentDto> getAllCommentsByCarId(@PathVariable String carId) {
        return commentService.getAllCommentsByCarId(carId).stream()
                .map(comment -> new CommentDto(comment.getCommentId(), comment.getComment()))
                .toList();
    }

    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable String commentId) {
        commentService.deleteComment(commentId);
    }
    @PostMapping("/car/{carId}")
    public Comment addComment(@PathVariable String carId, @RequestBody Comment comment) {
        return commentService.addComment(carId, comment);
    }
}