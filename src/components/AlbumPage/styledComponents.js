import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
`
export const ArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 450px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  padding-left: 100px;
`
export const ArtistName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: 600;
`
export const ArtistType = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 400;
`
export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`
export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const Input = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MusicList = styled.ul`
  padding: 0px;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display:flex;
  justify-content:center:
  align-items:center;
`
export const NoSongs = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
