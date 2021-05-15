package cvsite;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cvsite.services.FilesStorageService;

@SpringBootApplication
public class CvsiteApplication  implements CommandLineRunner{
	  @Resource
	  FilesStorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(CvsiteApplication.class, args);
	}
	
	  @Override
	  public void run(String... arg) throws Exception {
	 //   storageService.init();
	  }

}
