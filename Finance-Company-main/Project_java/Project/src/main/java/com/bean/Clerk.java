package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Clerk {
	@Id
	private String cusername;
	
	private String cpassword;
	public String getCusername() {
		return cusername;
	}
	public void setCusername(String cusername) {
		this.cusername = cusername;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	@Override
	public String toString() {
		return "Clerk [cusername=" + cusername + ", cpassword=" + cpassword + "]";
	}
	public Clerk() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
