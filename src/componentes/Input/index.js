import styled from "styled-components";

const Input = styled.input`
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px 30px;
    border-radius: 50px;
    width: 100%;
    max-width: 500px;
    color: #FFF;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    outline: none;

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 18px;
        font-weight: 400;
    }

    &:focus {
        border-color: rgba(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    &:hover {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.12);
    }

    @media (max-width: 768px) {
        padding: 18px 25px;
        font-size: 16px;

        &::placeholder {
            font-size: 16px;
        }
    }
`

export default Input