import styled from "styled-components";

export const GroupoForm = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  .inner {
    max-width: 758px;
    margin: auto;
    background: #fcddd8;
    border: 10px solid #fc411d;
    padding: 77px 99px 87px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  p {
    text-align: center;
    padding: 0 10px;
    margin-bottom: 55px;
    line-height: 1.8;
    color: red;
  }
  .form-group {
    position: relative;
    display: block;
    margin-bottom: 48px;
    span {
      font-size: 15px;
      color: #00ade6;
      position: absolute;
      top: 11px;
      transition: all 0.2s ease;
      transform-origin: 0 0;
      cursor: text;
    }
    span.border {
      height: 2px;
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      top: 41px;
      transform: scaleX(0);
      transition: all 0.15s ease;
      background: #fff;
    }
  }
  .form-control {
    border: none;
    border-bottom: 2px solid #00ade6;
    display: block;
    width: 100%;
    height: 43px;
    font-size: 15px;
    background: none;
    font-family: "Montserrat-SemiBold";
    padding-left: 10px;
    &:focus,
    &:valid {
      border-bottom: 2px solid #fff;
      & + span {
        transform: translateY(-22px) scale(0.8);
        & + .border {
          transform: scaleX(1);
        }
      }
    }
  }
  textarea.form-control {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  button {
    border: none;
    width: 162px;
    height: 51px;
    border: 2px solid #fff;
    margin: auto;
    margin-top: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    color: #fc411d;
    text-transform: uppercase;
    font-family: "Montserrat-SemiBold";
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #03045a;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    &:hover {
      border-color: transparent;
      &:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
      i {
        -webkit-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
  @media (max-width: 1199px) {
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    background: #fcddd8;
    border: 10px solid #0d99d7;
    p {
      font-size: 14px;
      padding: 0;
    }
    .inner {
      padding: 27px 20px 37px;
      border: none;
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      -ms-box-shadow: none;
      -o-box-shadow: none;
    }
  }
`;
