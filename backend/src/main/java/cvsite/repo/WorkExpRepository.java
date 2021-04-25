package cvsite.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cvsite.model.WorkExp;

@Repository
public interface WorkExpRepository extends JpaRepository<WorkExp, Long> {
	
	List<WorkExp> findByUserId(Long userId);
 
}
