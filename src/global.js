import { css } from "@emotion/core";

const global = css`
  & li {
    &:only-child {
      padding-top: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 50%;
      border-top: 1px solid #ccc;
      width: 50%;
      height: 1em;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 50%;
      border-top: 1px solid #ccc;
      width: 50%;
      height: 1em;
    }

    &:after {
      right: auto;
      left: 50%;
      border-left: 1px solid #ccc;
    }

    &:first-of-type {
      &:after {
        border-radius: 5px 0 0 0;
      }
    }

    &:last-child {
      &:before {
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
      }
    }

    &:first-of-type {
      &:before {
        border: 0 none;
      }
    }

    &:last-child {
      &:after {
        border: 0 none;
      }
    }
  }

  & ul {
    & ul {
      &:before {
        content: "";
        position: absolute;
        top: -1em;
        left: 50%;
        border-left: 1px solid #ccc;
        width: 0;
        height: 1em;
      }
    }
  }
`;

export default global;
