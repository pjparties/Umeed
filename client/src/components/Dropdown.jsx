import React from 'react'

const Dropdown = () => {
    return (
        <div class="grid grid-cols-1 gap-6 mt-7">
            <select id="countries" class="block w-full px-4 py-2 mt-2 text-black bg-gray-50 border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                <option selected>How did you find us?</option>
                <option value="SM">Social Media</option>
                <option value="FR">Friend</option>
                <option value="ON">Online</option>
                <option value="NP">Newspaper</option>
                <option value="OT">Others</option>
            </select>
        </div>
    )
}

export default Dropdown