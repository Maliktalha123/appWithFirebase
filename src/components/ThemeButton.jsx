import { MoonOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

const ThemeButton = () => {
  return (
    <div>
              <Tooltip title="search">
        <Button type="Theme" shape="circle" icon={<MoonOutlined />} />
      </Tooltip>
    </div>
  )
}

export default ThemeButton
