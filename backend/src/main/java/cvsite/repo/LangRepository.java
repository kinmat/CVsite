package cvsite.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cvsite.model.Education;
import cvsite.model.Language;


@Repository
public interface LangRepository extends JpaRepository<Language, Long> {
	List<Language> getByUserId(Long userId);
}
