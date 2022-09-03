import React from 'react'
import Input from '../../Forms/input'
import * as Icon from 'react-feather'
import RadioInput from '../../Forms/radioinput'
import Checkbox from '../../Forms/checkbox'
import Button from '../../Forms/button'

const Settings = () => {
  return (
    <div className = 'space-y-6'>
      <div className = ''>
        <h2 className = 'text-[32px] font-medium'>Settings</h2>
        <span className = 'text-vencru-darkgray'>Manage Your Team And Preferences Here.</span>
      </div>
      <div className='flex items-center justify-start'>
        <Button children='My details' roundleft />
        <Button children='Profile' straight />
        <Button children='Password' straight />
        <Button children='Team' straight />
        <Button children='Plan' straight />
        <Button children='Billing' straight />
        <Button children='Notifications' straight />
        <Button children='Integrations' straight />
        <Button children='API' roundright />
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

        <div className = 'flex items-start justify-start py-6 w-full border-b-2 border-vencru-lightgray space-x-48 '>
          <div className = 'flex items-start flex-col'>
            <h2 className="text-sm font-normal">
              Contact email
            </h2>
            <h4 className = 'text-xs text-vencru-darkgray' >
              Where should invoices be sent?
            </h4>
          </div>
          <div className='w-2/5 flex flex-col items-start justify-start space-y-4'>
            <RadioInput id='one' children={<div class="ml-2 text-sm">
                <label htmlFor="one" className="font-normal text-vencru-main">Send to my account email</label>
                <p id="one" className="text-xs font-normal text-vencru-darkgray">Olivia@untitledui.com</p>
              </div>} 
            />

            <RadioInput id='two' children={<div class="ml-2 text-sm">
                <label htmlFor='two' className="font-normal text-vencru-main">Send to alternative email</label>
              </div>} 
            />
            <Input leftIcon={<Icon.Mail className='text-vencru-darkgray' />} padding = 'py-2' bgColor= 'background' placeholder='Enter your email' />
          </div>
        </div>

        <div className = 'flex items-start justify-start py-6 w-full border-b-2 border-vencru-lightgray space-x-48 '>
        <div className = 'flex items-start flex-col'>
          <h2 className="text-sm font-normal">
            Card details
          </h2>
          <h4 className = 'text-xs text-vencru-darkgray' >
            Select default payment methods
          </h4>
        </div>
        <div className='w-3/4 flex flex-col items-start justify-start space-y-2'>
          <Checkbox styles= 'text-vencru-main' node={
            <div className='space-y-4'>
              <header>
                  <h2 className= 'font-normal'>Visa ending in 1234</h2>
                  <span className='text-sm'>Expiry 06/2024</span>
              </header>
              <div className='flex items-center justify-start space-x-2 w-full'>
                <h3 className='text-[14px]'>Set as default</h3>
                {/* <Button children='Edit' link /> */}
                <span className='text-vencru-purp font-normal'>Edit</span>
              </div>
            </div>} 
          />

          <Checkbox node={
            <div className='space-y-4'>
              <header>
                  <h2 className= 'font-normal'>MasterCard ending in 1234</h2>
                  <span className='text-sm'>Expiry 06/2024</span>
              </header>
              <div className='flex items-center justify-start space-x-2 w-full'>
                <h3 className='text-[14px]'>Set as default</h3>
                {/* <Button children='Edit' link /> */}
                <span className='text-vencru-purp font-normal'>Edit</span>
              </div>
            </div>} 
          />

          <Button children='Add new payment method' imgBefore={<Icon.Plus className = 'text-vencru-darkgray' />} link />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Settings