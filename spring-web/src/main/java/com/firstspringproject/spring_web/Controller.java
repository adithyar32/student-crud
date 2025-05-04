package com.firstspringproject.spring_web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") 
public class Controller {

    @Autowired
    private Service service;

    @PostMapping("/post")
    public String createemployee(@RequestBody Employee employee)
    {
        service.createemployee(employee);
        return "successfully Entered";
    }

    @GetMapping("/get")
    public List<Employee> getemployee()
    {
        return service.getemployee();
    }

    @GetMapping("get/{id}")
    public Employee getemployeebyid(@PathVariable int id){
        return service.getemployeebyid(id);
    }

    @PutMapping("/put/{id}")
    public String updateemployee(@PathVariable int id,@RequestBody Employee updatedemployee)
    {
        return service.updateemployee(id, updatedemployee);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteemployee(@PathVariable int id)
    {
        if(service.deleteemployee(id))
            return "ID:"+id+" Deleted Successfully";
        else
            return "ID:"+id+" Not Found";
    }

    @DeleteMapping("/delete")
    public String deleteall()
    {
        return service.deleteall();
    }






}
