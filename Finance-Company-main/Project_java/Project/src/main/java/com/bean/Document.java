package com.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "document")
public class Document {

	@Id
	@Column(name = "did")
	private int did;
	private int asid;
	private String image;
	
	
	@Override
	public String toString() {
		return "Document [did=" + did + ", asid=" + asid + ", image=" + image + "]";
	}
	public Document() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public int getAsid() {
		return asid;
	}
	public void setAsid(int asid) {
		this.asid = asid;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
}
