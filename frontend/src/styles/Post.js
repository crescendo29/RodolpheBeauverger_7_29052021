import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 50%;
    list-style: none;
    .post-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem;
      padding: 1rem;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      border: 2px solid #fc411d;
    }
  }
`;

export default Card;
