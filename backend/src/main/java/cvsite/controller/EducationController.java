package cvsite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cvsite.model.Education;
import cvsite.repo.EducationRepository;

@RestController
@CrossOrigin
public class EducationController {
	
	@Autowired
    EducationRepository eduRepo;

    @RequestMapping("/edu")
    public Iterable<Education> getAllEdu() {
        return eduRepo.findAll();
    }

    @RequestMapping("/edu/{id}")
    public Education getEdu(@PathVariable("id") Long id) {
        return eduRepo.findById(id).get();
    }

    @PostMapping("/edu")
    public Education addEdu(@RequestBody Education edu){
    	return eduRepo.save(edu);
    }
    
    @RequestMapping("/edu/user/{id}")
    public List<Education> getEdubyUser(@PathVariable("id") Long id) {
        return eduRepo.getByUserId(id);
    }

   

}

