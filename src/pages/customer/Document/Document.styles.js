import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: small;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ThumbnailContainer = styled.div`
  height: 2.5rem;
  aspect-ratio: 9/16;
  box-shadow: rgba(0, 0, 0, 0.24) 1px 1px 8px;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  white-space: nowrap;
`;

export const Type = styled.div`
  background-color: rgba(250, 231, 180, 0.5);
  padding: 0.25rem;
`;

export const Details = styled.p`
  font-size: 0.75rem;
  width: 20%;
`;
export const Action = styled.div`
  font-size: 0.9rem;
`;

export const SelectWrapper = styled.select`
  text-align: center;
  /* padding: 2px; */
  border: 1px solid orange;
  border-radius: 5px;
  color: orange;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
`;

export const Option = styled.option``;

export const UtilWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  button {
    background-color: transparent;
    border: 0;
    /* outline:none; */
    img {
      height: 1.25rem;
      cursor: pointer;
      opacity: 0.6;
      box-shadow: rgba(0, 0, 0, 0.25) 1px 0px 3px 0px;
      padding: 0.2rem;
      border-radius: 2px;
    }
  }
`;
