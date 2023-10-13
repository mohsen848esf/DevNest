
import React, { useState } from 'react'


const Tab = () => {

  const tabs:{name:string,link:string}[] = [
    { name: "Archives", link:"#" },
    { name: "Uploads", link:"#" },
    { name: "Analytics", link:"#" },
    { name: "Services", link:"#" },
    { name: "Informations", link:"#" },
  ]

  const [currentTab, setCurrentTab] = useState("Services")

  return (
    <div className="mx-auto w-full max-w-5xl ">
        
      {/* :SMALL DEVICES */}
      <div className="mx-auto max-w-md sm:hidden rounded-lg border border-gray-300 overflow-hidden">
        <label htmlFor="current-tab" className="sr-only">Select a tab</label>
        <select name="current-tab" id="current-tab" defaultValue={tabs?.find(tab => tab.name === currentTab)?.name}
          className="form-select w-full sm:w-auto block border-none text-sm text-gray-500 font-semibold cursor-pointer focus:ring-0"
        >
          {tabs.map(tab => (
            <option key={tab.name} value={tab.name} onClick={() => setCurrentTab(tab.name)}>{tab.name}</option>
          ))
          }
        </select>
      </div>



      {/* :LARGE DEVICES */}
      <nav className="-mb-0.5 hidden sm:block " aria-label="Tabs">
        <ul className="flex space-x-5 items-center justify-center">
          {tabs.map(tab => (
            <li key={tab.name} className={`border-b-2 text-base ${tab.name === currentTab ? "border-[#8571f9] " : "border-transparent text-gray-400 hover:text-white "}`}>
              <button type="button" className="px-4 pb-5 font-semibold" onClick={() => setCurrentTab(tab.name)}>
                {tab.name}
              </button>
            </li>
          ))
          }
        </ul>
      </nav>

    </div>
  )
}

export {Tab}
