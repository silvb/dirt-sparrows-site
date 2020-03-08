import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import styled from 'styled-components'

const LinkButton = styled.a`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 3px solid var(--main-color);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 32px 48px;
  transition: background-color 200ms ease, color 200ms ease;
  color: var(--sec-color);

  &:hover {
    background: var(--main-color);
    color: var(--main-bg-color);
    opacity: 0.8;
  }

  & span {
    margin-top: 23px;
  }
`

const SpotifyLinkButton = ({ link, text }) => (
  <LinkButton href={link}>
    <FaSpotify size={'64px'} />
    <span>{text}</span>
  </LinkButton>
)

export default SpotifyLinkButton