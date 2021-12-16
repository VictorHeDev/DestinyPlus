import React from 'react'

export default function VideoPlayer(props) {
  // const [visible, setVisible] = useState(false)

  return (
    <>
      <video
        src={props.fileUrl}
        controls
      >
      </video>
    </>
  )
}


