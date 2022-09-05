import React from 'react'
import Input from '../../Forms/input'
import * as Icon from 'react-feather'
import RadioInput from '../../Forms/radioinput'
import Checkbox from '../../Forms/checkbox'
import Button from '../../Forms/button'
import TableHeader from '../../table/tableheader'
import { SettingsTable } from '../../table/settingstable'

const Settings = () => {
  return (
    <div className = 'space-y-6'>
      <div className = ''>
        <h2 className = 'text-[32px] font-medium'>Settings</h2>
        <span className = 'text-vencru-darkgray'>Manage Your Team And Preferences Here.</span>
      </div>
      <div className='flex items-center justify-start overflow-x-scroll'>
        <Button children='Details' roundleft />
        <Button children='Profile' straight />
        <Button children='Password' straight />
        <Button children='Team' straight />
        <Button children='Plan' straight />
        <Button children='Billing' straight />
        <Button children='Notifications' straight />
        <Button children='Integrations' straight />
        <Button children='API' roundright />
      </div>
      <div className=''>
        <header className="flex items-start flex-col border-b-2 border-vencru-lightgray py-4">
          <h2 className="text-lg font-medium">
            Payment method
          </h2>
          <h4 className = 'text-sm text-vencru-darkgray' >
            Update your billing details and address.
          </h4>
        </header>

        <div className = 'flex flex-col items-start justify-start space-y-6 lg:flex-row lg:items-start lg:justify-start lg:space-y-0 py-6 w-full border-b-2 border-vencru-lightgray lg:space-x-48 '>
          <div className = 'flex items-start flex-col'>
            <h2 className="text-sm font-normal">
              Contact email
            </h2>
            <h4 className = 'text-xs text-vencru-darkgray' >
              Where should invoices be sent?
            </h4>
          </div>
          <div className='w-full lg:w-2/5 flex flex-col items-start justify-start space-y-4'>
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

        <div className = 'flex flex-col space-y-6 lg:flex-row items-start justify-start py-6 w-full lg:space-y-0 lg:space-x-48 '>
          <div className = 'flex items-start flex-col'>
            <h2 className="text-sm font-normal">
              Card details
            </h2>
            <h4 className = 'text-xs text-vencru-darkgray' >
              Select default payment methods
            </h4>
          </div>

          <div className='w-full lg:w-3/4 flex flex-col items-start justify-start space-y-2'>
            <Checkbox styles= 'text-vencru-main' node={
              <div className='space-y-4'>
                <header className='flex items-start justify-start'>
                    <img style={{paddingRight: '10px'}} width='55px' height = '40px' src = 'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' alt = 'visa logo' />
                    <div>
                      <h2 className= 'font-normal'>Visa ending in 1234</h2>
                      <span className='text-sm'>Expiry 06/2024</span>
                    </div>
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
                <header className='flex items-start justify-start'>
                  <img style={{border: 'text-vencru-stroke', paddingRight:'10px'}} width='55px' height = '40px' src = 'https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg' alt = 'mastercard logo' />
                  <div>
                    <h2 className= 'font-normal'>MasterCard ending in 1234</h2>
                    <span className='text-sm'>Expiry 06/2024</span>
                  </div>
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

      <div className='py-4 space-y-4'>
        <TableHeader title='Billing History' 
          node={<Button children = "Download all" 
          imgBefore={<Icon.DownloadCloud />} rounded />} 
        />
        <SettingsTable/>

      </div>
    </div>
  )
}

export default Settings