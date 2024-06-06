import React from 'react'

const Noteitem = (props) => {

    const {note}=props
  return (
    <div class="p-4 lg:w-1/2 w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{note.title}</h2>
            <p class="leading-relaxed text-base">{note.description}</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center" href=''>View
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    
  )
}

export default Noteitem
