package cvsite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cvsite.model.Language;
import cvsite.model.Skill;
import cvsite.repo.LangRepository;
import cvsite.repo.SkillRepository;

@RestController
@CrossOrigin
public class SkillLangController {
	
	@Autowired
    SkillRepository skillRepo;
	
	@Autowired
    LangRepository langRepo;
	
    @RequestMapping("/skill")
    public Iterable<Skill> getAllSkill() {
        return skillRepo.findAll();
    }

    @RequestMapping("/skill/{id}")
    public Skill getSkill(@PathVariable("id") Long id) {
        return skillRepo.findById(id).get();
    }

    @RequestMapping("/skill/user/{id}")
    public List<Skill> getSkillByUser(@PathVariable("id") Long id) {
        return skillRepo.getByUserId(id);
    }
    
    @PostMapping("/skill")
    public Skill addSkill(@RequestBody Skill skill){
    	return skillRepo.save(skill);
    }
   
    @RequestMapping("/lang")
    public Iterable<Language> getAllLanguage() {
        return langRepo.findAll();
    }

    @RequestMapping("/lang/{id}")
    public Language getLanguage(@PathVariable("id") Long id) {
        return langRepo.findById(id).get();
    }

    @PostMapping("/lang")
    public Language addLanguage(@RequestBody Language lang){
    	return langRepo.save(lang);
    }
    
    @RequestMapping("/lang/user/{id}")
    public List<Language> getLanguageByUser(@PathVariable("id") Long id) {
        return langRepo.getByUserId(id);
    }

   

}