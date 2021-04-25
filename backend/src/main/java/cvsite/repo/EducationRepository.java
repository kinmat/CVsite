package cvsite.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cvsite.model.Education;
import cvsite.model.PersonalInfo;


@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
	List<Education> getByUserId(Long userId);
}
