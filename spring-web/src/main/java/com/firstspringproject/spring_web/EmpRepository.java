package com.firstspringproject.spring_web;

import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface EmpRepository extends JpaRepository<Entity,Integer> {
    //repository class used to store data temporarily before transferring to database
}
