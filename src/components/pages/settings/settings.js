import React from 'react'

const Settings = () => {
  return (
    <div className = 'space-y-6'>
      <div className = ''>
        <h2 className = 'text-[32px] font-medium'>Settings</h2>
        <span className = 'text-vencru-darkgray'>Manage Your Team And Preferences Here.</span>
      </div>
      <div>
      <header className="flex items-start flex-col border-b-2 border-vencru-lightgray py-4">
        <h2 className="text-lg font-medium">
          Payment method
        </h2>
        <h4 className = 'text-sm text-vencru-darkgray' >
          Update your billing details and address.
        </h4>
      </header>

      <div className = 'flex items-start flex-col py-4'>
        <h2 className="text-sm font-normal">
            Contact email
          </h2>
          <h4 className = 'text-xs text-vencru-darkgray' >
            Where should invoices be sent?
          </h4>
      </div>
      </div>
    </div>
  )
}

export default Settings