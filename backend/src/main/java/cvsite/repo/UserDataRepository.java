package cvsite.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cvsite.model.UserData;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {
 UserData getByUsername(String username);
}