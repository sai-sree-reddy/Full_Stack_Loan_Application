package com.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name = "loanapplication")
public class LoanApplication {
	@Id
	
	@Column(name = "aid")
	private int aid;
	private int lsid;
	private int csid;
	private String approved;
	private int amount;
	@Column(name = "appliedby")
	private String appliedBy;
	@Column(name = "approvedby")
	private String approvedBy;
	
	public String getAppliedBy() {
		return appliedBy;
	}
	public void setAppliedBy(String appliedBy) {
		this.appliedBy = appliedBy;
	}
	public String getApprovedBy() {
		return approvedBy;
	}
	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}
	
	
	@OneToMany(targetEntity = Document.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "asid", referencedColumnName = "aid")
	private List<Document> listOfDocument;	
	
	
	public List<Document> getListOfDocument() {
		return listOfDocument;
	}
	public void setListOfDocument(List<Document> listOfDocument) {
		this.listOfDocument = listOfDocument;
	}
	public LoanApplication() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoanApplication(int aid, int lsid, int csid, String approved, int amount) {
		super();
		this.aid = aid;
		this.lsid = lsid;
		this.csid = csid;
		this.approved = approved;
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "LoanApplication [aid=" + aid + ", lsid=" + lsid + ", csid=" + csid + ", approved=" + approved + ", amount="
				+ amount + "]";
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public int getLsid() {
		return lsid;
	}
	public void setLsid(int lsid) {
		this.lsid = lsid;
	}
	public int getCsid() {
		return csid;
	}
	public void setCsid(int csid) {
		this.csid = csid;
	}
	public String getApproved() {
		return approved;
	}
	public void setApproved(String approved) {
		this.approved = approved;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	
}

