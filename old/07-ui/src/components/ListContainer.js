import styled from "styled-components";

const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    li {
        padding: 5px 10px;
        cursor: pointer;
        border-bottom: 1px dotted #d5d5dd;

        &:first-child {
            border-top: dotted #d5d5dd;
        }

        &.blue {
            background-color: #06f2;
        }
        &.orange {
            background-color: #f602;
        }
        &.pink {
            background-color: #f0f2;
        }
    }
`;

export default ListContainer;
