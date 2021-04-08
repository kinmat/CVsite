package cvsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cvsite.model.WorkExp;
import cvsite.repo.WorkExpRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WorkExpController {
	
	@Autowired
    WorkExpRepository workRepo;

    @RequestMapping("/work")
    public Iterable<WorkExp> getAllWorkExp() {
        return workRepo.findAll();
    }

    @RequestMapping("/work/{id}")
    public WorkExp getWorkExp(@PathVariable("id") Long id) {
        return workRepo.findById(id).get();
    }

    @PostMapping("/work")
    public WorkExp addWorkExp(@RequestBody WorkExp work){
    	return workRepo.save(work);
    }
   

}
