package com.laura.crud_spring.repository;

import com.laura.crud_spring.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {  //Entidade e tipo de chave primaria

}
