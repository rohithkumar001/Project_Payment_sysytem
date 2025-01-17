package com.example.PaymentSystem.Controller;

import com.example.PaymentSystem.Model.TransactionTBL;
import com.example.PaymentSystem.Model.TransactionDTO;
import com.example.PaymentSystem.Services.TransactionServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    private  static Logger logger = LoggerFactory.getLogger(TransactionController.class);
    @Autowired
    private TransactionServices transactionServices;
    private TransactionTBL transaction;
    private TransactionDTO transactionDTO;
    @PostMapping("/make")
    public ResponseEntity<String> SaveTransaction(@RequestBody TransactionDTO transactionDTO){
        logger.info("Received Data"+transactionDTO);
        transactionServices.SaveTransaction(transactionDTO);

        //transactionServices.transfermoney(transaction.getAmount(),transaction.getTransactionid());

        //transactionServices
       return(ResponseEntity.status(HttpStatus.OK).body("OK"));


    }
    @GetMapping("/getall")
    public List<TransactionTBL> show(){
        return transactionServices.Getall();
    }

}


