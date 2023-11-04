import React from "react";
import {
  Wrapper,
  ClientList,
  SideMenuContainer,
  ImgWrapper,
  Name,
  Time,
  Client,
  MainContent,
  SearchContainer,
  SearchClientWrapper,
  ActionBtnsWrapper,
  ActionBtn,
  Number,
} from "./Clients.styles";
import ClientDetailsWrapper from "./client-details-wrapper/ClientDetailsWrapper";

import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomers,
  refilter,
  sortByCategory,
} from "../../redux/customers/customerSlice";
import Loader from "../../components/loader/loader";
import { NoContentMsg } from "./client-details-wrapper/ClientDetails.styles";
import { formatDateHandler } from "../../utils/formatDate";
import { showNewDocModel } from "../../redux/documents/documentSlice";
import { Option, SelectWrapper } from "./client-deatils/ClientDetails.styles";

const options = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "not_answered", label: "Not answered" },
  { value: "deal", label: "Deal" },
  { value: "call_back", label: "Call back" },
  { value: "not_relevant", label: "Not relevant" },
  { value: "wrong_number", label: "Wrong number" },
  { value: "hebrew", label: "Hebrew" },
  { value: "russian", label: "Russian" },
  { value: "arabic", label: "Arabic" },
];

const Clients = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { customers, _customers, loading, error } = useSelector(
    (store) => store.customer
  );
  async function getRandomImage() {
    try {
      const response = await fetch("https://source.unsplash.com/random/?funny");
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      return response.url;
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  }

  const SelectComponent = ({ options, value, onChange }) => {
    return (
      <SelectWrapper value={value} onChange={onChange}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectWrapper>
    );
  };

  function filterCustomersByCategory(event) {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    let filteredCustomers;

    if (selectedCategory.toLowerCase() === "all") {
      filteredCustomers = _customers; // Assign all customers if "all" category is selected
    } else {
      filteredCustomers = _customers.filter((customer) => {
        return (
          customer.customerStatus.toLowerCase() ===
          selectedCategory.toLowerCase()
        );
      });
    }

    dispatch(sortByCategory(filteredCustomers));
  }

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refilter(searchKey));
  }, [dispatch, searchKey]);

  useEffect(() => {
    getRandomImage().then((imageUrl) => {
      setAvatar(imageUrl);
    });
  }, []);

  return (
    <Wrapper>
      <SearchClientWrapper>
        <SearchContainer>
          <input
            type="text"
            placeholder="Search for Client"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </SearchContainer>
      </SearchClientWrapper>
      <ActionBtnsWrapper>
        <ActionBtn
          onClick={() => {
            dispatch(showNewDocModel());
          }}
        >
          Add Customer
        </ActionBtn>
        <SelectComponent
          options={options}
          value={selectedCategory}
          onChange={filterCustomersByCategory}
        />
      </ActionBtnsWrapper>
      <MainContent>
        <SideMenuContainer>
          {loading && <Loader />}
          {!loading && error}
          {!loading && !error && Boolean(customers.length) && (
            <ClientList>
              {customers?.map((customer, index) => {
                return (
                  <Client key={index} to={`./${customer.id}`}>
                    <ImgWrapper>
                      <img src={avatar} alt="client" />
                    </ImgWrapper>
                    <div>
                      <Name>{customer.name}</Name>
                      <Time>{formatDateHandler(customer.createdAt)}</Time>
                      <Number>{index + 1}</Number>
                    </div>
                  </Client>
                );
              })}
            </ClientList>
          )}
          {Boolean(_customers.length) && !Boolean(customers.length) && (
            <NoContentMsg>Match Not Found!!</NoContentMsg>
          )}
          {!loading && !Boolean(_customers.length) && (
            <NoContentMsg>No Client Exists</NoContentMsg>
          )}
        </SideMenuContainer>

        <Routes>
          <Route path={"/:id"} element={<ClientDetailsWrapper />} />

          {/*Redirects to first client*/}
          {customers.length && (
            <Route path="/" element={<Navigate to={`${customers[0].id}`} />} />
          )}
        </Routes>
      </MainContent>
    </Wrapper>
  );
};

export default Clients;
