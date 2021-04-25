package cvsite.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cvsite.model.Skill;


@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
	List<Skill> getByUserId(Long userId);
}
