package com.finalproject.BPALapp.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.finalproject.BPALapp.model.BPALmodel;
import com.finalproject.BPALapp.repository.BPALRepository;
//import com.finalproject.BPALapp.exception.BPALresourceNotFound;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BPALController {

	@Autowired
	private BPALRepository repository;
	
	//get all perfumes
	@GetMapping("/display")
    public List < BPALmodel > getAllPerfume() {
		 System.out.println("thing gotten");
        return repository.findAll();
       
    }
	
	//create a new perfume rest API
	@PostMapping("/addperfume")
	public BPALmodel createPerfume(@RequestBody BPALmodel newPerfume) {
		System.out.println("sending info");
        return repository.save(newPerfume);
    }
	
//	//get perfume by ID rest API
//	@GetMapping("/perfumes/{id}")
//	
//	public Optional<BPALmodel> getPerfumeById(@PathVariable Long id) {
//		return this.repository.findById(id);
////    public ResponseEntity < BPALmodel > getPerfumeById {
////        BPALmodel perfume = repository.findById(id)
////           .orElseThrow(new BPALresourceNotFound ("That perfume does not exist with id :" + id));
////        return ResponseEntity.ok(perfume);
//    }
	
//	 update perfume rest api
//    @PutMapping("/updateperfume/{id}")
//    public void updatePerfume(@PathVariable Long id, @RequestBody BPALmodel perfumeInfo) {
//    	
//    	BPALmodel perfume = repository.save(perfumeInfo);
//    }
//        
//            .orElseThrow(new BPALresourceNotFound("That perfume does not exist with id :" + id));
//        		
//        perfume.setName(perfumeInfo.getName());
//        perfume.setLine(perfumeInfo.getLine());
//        perfume.setSize(perfumeInfo.getSize());
//		perfume.setDisc(perfumeInfo.getDisc());
//		perfume.setLimited(perfumeInfo.getLimited());	
//
//        BPALmodel updatedPerfume = repository.save(perfume);
//        return ResponseEntity.ok(updatedPerfume);
//    }

    
//    delete perfume rest api
//    @DeleteMapping("/display")
//    public void deletePerfume (@PathVariable Long id) {
//        repository.deletePerfume(id);
//  //         .orElseThrow(() - > new BPALresourceNotFound("That perfume does not exist with id :" + id));
//
//        repository.delete(perfume);
//        Map < String, Boolean > response = new HashMap < > ();
//        response.put("deleted", Boolean.TRUE);
//        return ResponseEntity.ok(response);
//     }
    }
