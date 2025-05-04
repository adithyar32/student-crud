package com.firstspringproject.spring_web;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
@org.springframework.stereotype.Service
public class ServiceImpl implements Service{

    @Autowired
    private EmpRepository repository;

    @Override
    public String createemployee(Employee employee) {
        Entity entity=new Entity();
        BeanUtils.copyProperties(employee,entity);
        repository.save(entity);

        return "Successfully Created";
    }

    @Override
    public List<Employee> getemployee() {
        List<Entity> entitieslist =repository.findAll();
        List<Employee> employees=new ArrayList<>();

        for(Entity entity:entitieslist)
        {
            Employee emp=new Employee();

            emp.setId(entity.getId());
            emp.setMail(entity.getMail());
            emp.setName(entity.getName());
            emp.setPhone(entity.getPhone());

            employees.add(emp);
        }
        return employees;
    }

    @Override
    public Employee getemployeebyid(int id){
        Employee employee=new Employee();
        if(repository.existsById(id)) {

            Entity entity = repository.findById(id).get();

            BeanUtils.copyProperties(entity,employee);

            return employee;
        }
        else{
            return null;
        }
    }

    @Override
    public Boolean deleteemployee(int id) {

        if(repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        else return false;

    }

    @Override
    public String deleteall()
    {
        repository.deleteAll();
        return "Data Deleted Successfully";
    }

    @Override
    public String updateemployee(int id,Employee updatedemployee) {

        if(repository.existsById(id)) {
            Entity entity=repository.findById(id).get();

            entity.setName(updatedemployee.getName());
            entity.setMail(updatedemployee.getMail());
            entity.setPhone(updatedemployee.getPhone());

            repository.save(entity);

            return "ID:" + id + " Updated succesfully";
        }
        else return "ID:" + id + " Not Found";
    }
}
