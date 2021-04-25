package cvsite.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "education")
public class Education {
	 private Long id;
	    private Long userId;
	    private String title;
	    private String org;
	    private String city;
	    private String country;
	    private Date to;
	    private Date from;
	    private String description;
	    private boolean inProgress;
	    
		public Education() {
			
		}

		public Education(Long userId, String title, String org, String city, String country, Date to, Date from,
				String description, boolean inProgress) {
			super();
			this.userId = userId;
			this.title = title;
			this.org = org;
			this.city = city;
			this.country = country;
			this.to = to;
			this.from = from;
			this.description = description;
			this.inProgress = inProgress;
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
		
		@Column(name="user_id")
		public Long getUserId() {
			return userId;
		}

		public void setUserId(Long userId) {
			this.userId = userId;
		}
		
		@Column(name="title")
		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}
		
		@Column(name="org")
		public String getOrg() {
			return org;
		}

		public void setOrg(String org) {
			this.org = org;
		}

		@Column(name="city")
		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		@Column(name="country")
		public String getCountry() {
			return country;
		}

		public void setCountry(String country) {
			this.country = country;
		}

		@Column(name="edu_to")
		public Date getTo() {
			return to;
		}

		public void setTo(Date to) {
			this.to = to;
		}
		
		@Column(name="edu_from")
		public Date getFrom() {
			return from;
		}

		public void setFrom(Date from) {
			this.from = from;
		}

		@Column(name="description")
		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		@Column(name="in_progress")
		public boolean isInProgress() {
			return inProgress;
		}

		public void setInProgress(boolean inProgress) {
			this.inProgress = inProgress;
		}
		
	    
	    
}
