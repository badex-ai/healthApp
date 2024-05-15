import React from 'react'

const AchievementCont = ({achievement,}) => {
  return (
    <div className='h-[26rem] w-[90%] border mx-auto rounded-xl mb-[3.5rem] p-[1rem]'>
        <div className='text-4xl'>{achievement.year}</div>
        <div>Roadmap</div>
        <div></div>
        
    </div>
  )
}

export default AchievementCont