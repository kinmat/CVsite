package cvsite.model;

import javax.persistence.*;

@Entity
@Table(name = "user_data")
public class UserData {

    private Long id;
     
    private String username;
    private String email;
    private String password;
    
	public UserData() {
	}

	public UserData(String username, String email) {
		this.username = username;
		this.email = email;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@Column(name="username")
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name="email")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name="pass")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}