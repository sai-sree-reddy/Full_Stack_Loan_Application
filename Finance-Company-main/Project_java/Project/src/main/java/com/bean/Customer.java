package com.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "cid")
	private int cid;
	private String cname;
	private String gender;
	private String 	contact;
	private String password;
	
	@OneToMany(targetEntity = LoanApplication.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "csid", referencedColumnName = "cid")
	private List<LoanApplication> listOfloanAppliction;	
	
	public List<LoanApplication> getListOfloanAppliction() {
		return listOfloanAppliction;
	}
	public void setListOfloanAppliction(List<LoanApplication> listOfloanAppliction) {
		this.listOfloanAppliction = listOfloanAppliction;
	}
	public int getCid() {
		return cid;
	}
	
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Customer [cid=" + cid + ", cname=" + cname + ", gender=" + gender + ", contact=" + contact
				+ ", password=" + password + "]";
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
