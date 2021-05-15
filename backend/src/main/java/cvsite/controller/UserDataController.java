package cvsite.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cvsite.model.UserData;
import cvsite.repo.UserDataRepository;

@RestController
@CrossOrigin
public class UserDataController {
	
	@Autowired
    UserDataRepository userDataRepo;

    @RequestMapping("/users")
    public Iterable<UserData> getUsers() {
        return userDataRepo.findAll();
    }

    @RequestMapping("/users/{id}")
    public UserData getUser(@PathVariable("id") Long id) {
        return userDataRepo.findById(id).get();
    }

    @PostMapping("/users")
    public UserData addUser(@RequestBody UserData user){
    	return userDataRepo.save(user);
    }
    
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
		userDataRepo.deleteById(id);
    }
    
   
    @RequestMapping("/users/username/{username}")
    public UserData getUserByUsername(@PathVariable("username") String username) {
        return userDataRepo.getByUsername(username);
    }

}

