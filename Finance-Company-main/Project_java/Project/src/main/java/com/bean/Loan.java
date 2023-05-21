package com.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Loan")
public class Loan {

	@Id
	@Column(name = "lid")
	private int lid;
	private String ltype;
	private int linterest;
	@OneToMany(targetEntity = LoanApplication.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "lsid", referencedColumnName = "lid")
	private List<LoanApplication> listOfloanAppliction;	
	
	public List<LoanApplication> getListOfloanAppliction() {
		return listOfloanAppliction;
	}
	public void setListOfloanAppliction(List<LoanApplication> listOfloanAppliction) {
		this.listOfloanAppliction = listOfloanAppliction;
	}
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
	}
	public String getLtype() {
		return ltype;
	}
	public void setLtype(String ltype) {
		this.ltype = ltype;
	}
	public int getLinterest() {
		return linterest;
	}
	public void setLinterest(int linterest) {
		this.linterest = linterest;
	}
	@Override
	public String toString() {
		return "Loan [lid=" + lid + ", ltype=" + ltype + ", linterest=" + linterest + "]";
	}
	public Loan(int lid, String ltype, int linterest) {
		super();
		this.lid = lid;
		this.ltype = ltype;
		this.linterest = linterest;
	}
	public Loan() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}


