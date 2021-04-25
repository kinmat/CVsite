package cvsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cvsite.model.PersonalInfo;
import cvsite.repo.PersonalInfoRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonalInfoController {
	
	@Autowired
    PersonalInfoRepository personalRepo;

    @RequestMapping("/personal")
    public Iterable<PersonalInfo> getAllPersonalInfo() {
        return personalRepo.findAll();
    }

    @RequestMapping("/personal/{id}")
    public PersonalInfo getPersonalInfo(@PathVariable("id") Long id) {
        return personalRepo.findById(id).get();
    }

    @PostMapping("/personal")
    public PersonalInfo addPersonal(@RequestBody PersonalInfo personal){
    	return personalRepo.save(personal);
    }
    
    @RequestMapping("/personal/user/{id}")
    public PersonalInfo getUsersPersonalInfo(@PathVariable("id") int id) {
    	return personalRepo.getByUserId(id);
    }

    
    
   

}
