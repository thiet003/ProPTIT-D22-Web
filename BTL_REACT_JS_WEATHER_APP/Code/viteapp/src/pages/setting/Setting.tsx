import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { ModeToggle } from '../components/mode-toggle'

const Settings = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <span>Theme:</span>
            {/* <ModeToggle /> */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings