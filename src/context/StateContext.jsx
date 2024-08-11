import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [VisitingUsers, setVisitingUsers] = useState(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem("VisitingUsers") !== null
        ? JSON.parse(localStorage.getItem("VisitingUsers"))
        : [];
    return [];
  });

  const [user, setUser] = useState(null);
  const [visitingCount, setVisitingCount] = useState(0);
  const [income, setIncome] = useState(0);

  const TICKET_PRICE = 150;
  const USER_NAME = "admin";
  const PASSWORD = 123456;

  const updateVisitingCount = (users) => {
    const count = users.reduce((total, user) => {
      return total + (user ? user.count : 0);
    }, 0);
    setVisitingCount(count);
  };

  const updateIncome = (users) => {
    const income = users.reduce((total, user) => {
      return total + (user ? user.count * TICKET_PRICE : 0);
    }, 0);
    setIncome(income);
  };

  const onAdd = (visiter) => {
    const checkVisiterInCart = VisitingUsers.find(
      (item) => item.phone === visiter.phone
    );

    let updatedVisitingUsers;
    if (checkVisiterInCart) {
      // Update the existing visitor in the cart
      updatedVisitingUsers = VisitingUsers.map((visitingOne) => {
        if (visitingOne.phone === visiter.phone) {
          // Update the count
          visitingOne.count += visiter.count;
        }
        return visitingOne;
      });
    } else {
      // Add new visitor to the cart
      updatedVisitingUsers = [...VisitingUsers, { ...visiter }];
    }
    setVisitingUsers(updatedVisitingUsers);
    updateVisitingCount(updatedVisitingUsers);
    updateIncome(updatedVisitingUsers);
  };

  const toggleVisitorState = (phoneNumber, newState) => {
    const updatedVisitingUsers = VisitingUsers.map((visitingOne) => {
      if (visitingOne.phone === phoneNumber) {
        // Update the state of the matching visitor
        toast.success("Visiter group state changed.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#31363F",
          },
          iconTheme: {
            primary: "#31363F",
            secondary: "#FFFAEE",
          },
        });
        return { ...visitingOne, state: newState };
      }
      // Return other visitors unchanged
      return visitingOne;
    });
    setVisitingUsers(updatedVisitingUsers);
    console.log(updatedVisitingUsers);
  };

  const loginHandler = (loginData) => {
    if (loginData) {
      console.log(loginData);
      if (loginData.password != PASSWORD) return toast.error("wrong password.");
      if (loginData.name != USER_NAME) return toast.error("wrong user name.");
      if (loginData.name == USER_NAME && loginData.password == PASSWORD)
        toast.success("login success.");
      return setUser(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("VisitingUsers", JSON.stringify(VisitingUsers));
    }
    updateVisitingCount(VisitingUsers);
    updateIncome(VisitingUsers);
  }, [VisitingUsers]);

  return (
    <Context.Provider
      value={{
        VisitingUsers,
        onAdd,
        user,
        setUser,
        toggleVisitorState,
        visitingCount,
        income,
        loginHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
