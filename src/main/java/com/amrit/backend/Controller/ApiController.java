package com.amrit.backend.Controller;

import com.amrit.backend.AlphavantageApi;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping(path = "/")
public class ApiController {
    @Autowired
    private final AlphavantageApi api;

    public ApiController(AlphavantageApi api) {
        this.api = api;
    }


    @GetMapping(path = "/query", produces = "application/json")
    public JsonNode getFinancialData(@RequestParam String function, String symbol, @RequestParam(required = false) String interval, String outputsize) throws Exception {
        return api.fetchFinancialData(function, symbol, interval, outputsize, true);
    }

    @GetMapping(path = "/quote", produces = "application/json")
    public JsonNode getQuote(@RequestParam String function, @RequestParam String symbol) throws Exception {
        return api.fetchQuote(function, symbol, true);
    }

    @GetMapping(path = "/search", produces = "application/json")
    public JsonNode getSearch(@RequestParam String function, @RequestParam String keywords) throws Exception {
        return api.search(function, keywords);
    }
}
