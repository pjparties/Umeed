import React from 'react'

const ToggleCall = () => {
  return (
    <div>
      <label for="Toggle3" className="inline-flex bg-unchecked items-center p-2 rounded-xl cursor-pointer text-gray-800">
        <input id="Toggle3" type="checkbox" className="hidden peer" />
        <span className="px-[4.7rem] py-2 rounded-xl bg-unchecked peer-checked:bg-checked">Call</span>
        <span className="px-[4.7rem] py-2 rounded-xl bg-checked peer-checked:bg-unchecked">Email</span>
      </label>
    </div>
  )
}

export default ToggleCall