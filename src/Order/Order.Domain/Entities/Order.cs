﻿using Order.Domain.Entities.Base;

namespace Order.Domain.Entities;
public class Order : Entity
{
    public string UserName { get; set; }

    public decimal TotalPrice { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Email { get; set; }

    public string CardName { get; set; }

    public string CardNumber { get; set; }

    public string CardExpr { get; set; }

    public string CVV { get; set; }

    public int PaymentMethod { get; set; }
}
