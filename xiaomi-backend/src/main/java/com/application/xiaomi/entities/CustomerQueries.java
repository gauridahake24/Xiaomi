package com.application.xiaomi.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomerQueries {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int query_id;

    private String query_text;
    private String query_status;
    private String response_text;

    public CustomerQueries(int query_id, String query_text, String query_status, String response_text) {
        super();
        this.query_id = query_id;
        this.query_text = query_text;
        this.query_status = query_status;
        this.response_text = response_text;
    }

    public int getQuery_id() {
        return query_id;
    }

    public void setQuery_id(int query_id) {
        this.query_id = query_id;
    }

    public String getQuery_text() {
        return query_text;
    }

    public void setQuery_text(String query_text) {
        this.query_text = query_text;
    }

    public String getQuery_status() {
        return query_status;
    }

    public void setQuery_status(String query_status) {
        this.query_status = query_status;
    }

    public String getResponse_text() {
        return response_text;
    }

    public void setResponse_text(String response_text) {
        this.response_text = response_text;
    }
}
