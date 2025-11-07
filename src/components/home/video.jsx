import React from 'react'

const video = () => {
  return (
    <div className='w-full h-full'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
            <source src='https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1762014310~exp=1762017910~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=8f706b9da35689ca66f44b9afdbfe5923dffa54c4c660399b46966d78751f495&r=dXMtZWFzdDE%3D' type='video/mp4' />
            <source src='/home-bg-video.mp4' type='video/mp4' />
        </video>
    </div>
  )
}

export default video