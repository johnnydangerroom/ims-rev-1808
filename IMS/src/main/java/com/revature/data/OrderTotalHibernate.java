package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.OrderTotal;
import com.revature.utils.HibernateUtil;

@Service
public class OrderTotalHibernate implements OrderTotalDAO {
	@Autowired
	private HibernateUtil hu;

	@Override
	public OrderTotal getOrdTotalById(int id) {
		Session ss = hu.getSession();
		OrderTotal ord = ss.get(OrderTotal.class,  id);
		return ord;
	}


	@Override	
	public Set<OrderTotal> getOrdTotals() {
		Session ss = hu.getSession();
		String hql = "FROM com.revature.beans.OrderTotal";
		TypedQuery<OrderTotal> que = ss.createQuery(hql, OrderTotal.class);
		List<OrderTotal> orderList = que.getResultList();
		return new HashSet<OrderTotal>(orderList);
	}
}
