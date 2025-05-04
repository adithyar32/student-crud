package com.firstspringproject.spring_web;

import java.util.List;

public interface Service {
    String createemployee(Employee employee);
    List<Employee> getemployee();
    Employee getemployeebyid(int id);
    String updateemployee(int id,Employee employee);
    Boolean deleteemployee(int id);
    String deleteall();
}
