package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Manager {

	@Id
	private String musername;
	private String mpassword;
	@Override
	public String toString() {
		return "Manager [musername=" + musername + ", mpassword=" + mpassword + "]";
	}
	public Manager(String musername, String mpassword) {
		super();
		this.musername = musername;
		this.mpassword = mpassword;
	}
	public Manager() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMusername() {
		return musername;
	}
	public void setMusername(String musername) {
		this.musername = musername;
	}
	public String getMpassword() {
		return mpassword;
	}
	public void setMpassword(String mpassword) {
		this.mpassword = mpassword;
	}
}
