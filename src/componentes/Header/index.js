import { useState } from 'react';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(235, 155, 0, 0.1);
`

const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    height: 80px;

    @media (max-width: 768px) {
        padding: 15px 20px;
        height: 70px;
    }
`

const LeftSection = styled.div`
    display: flex;
    align-items: center;
`

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 12px;
    }
`

const MobileMenuButton = styled.button`
    display: none;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 10px;
    border-radius: 12px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(235, 155, 0, 0.12);
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const BurgerBar = styled.span`
    display: block;
    width: 24px;
    height: 2px;
    background: #002F52;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    margin: 3px 0;

    &:nth-child(1) {
        transform: ${({ open }) => (open ? 'translateY(5px) rotate(45deg)' : 'none')};
    }

    &:nth-child(2) {
        opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
        transform: ${({ open }) => (open ? 'translateY(-5px) rotate(-45deg)' : 'none')};
    }
`

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 1400;
`

const MobileMenu = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(280px, 100%);
    background: #ffffff;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.12);
    transform: translateX(${({ open }) => (open ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 1500;
    display: flex;
    flex-direction: column;
    padding: 80px 20px 20px;
    gap: 20px;

    @media (min-width: 769px) {
        display: none;
    }
`

const MobileMenuTitle = styled.h2`
    margin: 0;
    font-size: 22px;
    color: #002F52;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
`

const MobileMenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const MobileMenuItem = styled(Link)`
    display: block;
    padding: 14px 16px;
    border-radius: 14px;
    color: #002F52;
    text-decoration: none;
    font-weight: 600;
    background: rgba(234, 170, 36, 0.08);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background: rgba(235, 155, 0, 0.18);
        transform: translateX(3px);
    }
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Estante'];

function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <LeftSection>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Logo/>
                    </Link>
                </LeftSection>
                <RightSection>
                    <OpcoesHeader/>
                    <IconesHeader/>
                </RightSection>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header