package com.application.xiaomi.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cust_order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int order_id;

    private String customer_name;
    private String device_model;
    private String issue_description;
    private String status;

    public Cust_order(int order_id, String customer_name, String device_model, String issue_description, String status) {
        super();
        this.order_id = order_id;
        this.customer_name = customer_name;
        this.device_model = device_model;
        this.issue_description = issue_description;
        this.status = status;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }

    public String getDevice_model() {
        return device_model;
    }

    public void setDevice_model(String device_model) {
        this.device_model = device_model;
    }

    public String getIssue_description() {
        return issue_description;
    }

    public void setIssue_description(String issue_description) {
        this.issue_description = issue_description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
