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
} from "./Customer.styles";
import DocumentList from "./Document List/DocumentList";

import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomers,
  refilter,
  sortByCategory,
} from "../../features/customers/customerSlice";
import Loader from "./../../components/loader/loader";
import { NoContentMsg } from "./Document List/DocumentsList.styles";
import { formatDateHandler } from "../../utils/formatDate";
import { showNewDocModel } from "../../features/documents/documentSlice";
import { Option, SelectWrapper } from "./Document/Document.styles";

const options = [
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

const Customer = () => {
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
    setSelectedCategory(event.target.value);

    const filteredCustomers = _customers.filter((customer) => {
      return (
        customer.customerStatus.toLowerCase() === selectedCategory.toLowerCase()
      );
    });

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
          <Route path={"/:id"} element={<DocumentList />} />
          {customers.length && (
            <Route path="/" element={<Navigate to={`${customers[0].id}`} />} />
          )}
        </Routes>
      </MainContent>
    </Wrapper>
  );
};

export default Customer;
