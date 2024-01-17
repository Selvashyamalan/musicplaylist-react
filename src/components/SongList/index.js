import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDelContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const SongList = props => {
  const {onClickDeleteTrack, MusicItemDetails} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDelContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        />
        <AiOutlineDelete size={25} color="#ffffff" />
      </DurationDelContainer>
    </MusicListItem>
  )
}

export default SongList
