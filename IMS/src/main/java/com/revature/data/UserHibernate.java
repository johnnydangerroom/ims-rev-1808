package com.revature.data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Component;

import com.revature.beans.User;

@Component
public class UserHibernate implements UserDAO {
	private static Logger log = Logger.getLogger(UserHibernate.class);
	private Session session;
	@Override
	public void setSession(Session session) {
		this.session = session;
	}
	
	@Override
	public int addUser(User use) {
		return (int) session.save(use);
	}
	@Override
	public User getUserById(int id) {
		log.trace("getting user from database");
		return session.get(User.class, id);
	}
	@Override
	public List<User> getUsersCriteria(User use) {
		ArrayList<Predicate> preds = null;
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<User> cr = cb.createQuery(User.class);
		Root<User> root = cr.from(User.class);
		
		return null;
	}
	@Override
	public Set<User> getUsers() {
		String hql = "FROM com.revature.beans.User";
		Query<User> que = session.createQuery(hql, User.class);
		List<User> userList = que.getResultList();
		session.close();
		return new HashSet<User>(userList);
	}
	@Override
	public void updateUser(User use) {
		Transaction tx = session.beginTransaction();
		try {
			session.update(use);
			tx.commit();
		} catch(Exception e) {
			tx.rollback();
		} finally {
			session.close();
		}
	}
	@Override
	public void deleteUser(User use) {
		Transaction tx = session.beginTransaction();
		try {
			session.delete(use);
			tx.commit();
		} catch(Exception e) {
			tx.rollback();
		}
		
	}	
}
